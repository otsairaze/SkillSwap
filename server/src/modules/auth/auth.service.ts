import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInInput, SignupInput } from './dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { JwtPayload } from '../../types/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(input: SignupInput) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: input.email }, { login: input.login }],
      },
    });

    if (existingUser) {
      throw new UnauthorizedException(
        'User with this email or login already exists',
      );
    }

    const hashedPassword = await bcrypt.hash(input.password, 12);

    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        login: input.login,
        password: hashedPassword,
      },
    });

    const accessToken = this.jwtService.sign({ id: user.id });

    return { user, accessToken };
  }

  async signin(input: SignInInput) {
    const user = await this.prisma.user.findFirst({
      where: {
        login: input.login,
      },
    });

    console.log('find user user', user);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(input.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const accessToken = this.jwtService.sign({ id: user.id });

    return { user, accessToken };
  }

  async me(@CurrentUser() user: JwtPayload) {
    const id = user.id;

    const currentUser = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return { user: currentUser };
  }
}
