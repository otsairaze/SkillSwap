import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInInput, SignupInput } from './dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '@shared/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from '@common/decorators/current-user.decorator';

import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { JwtPayload } from '../../types/jwt.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signup(input: SignupInput, res: Response) {
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

    await this.generateToken({ id: user.id }, res);

    return { user };
  }

  async signin(input: SignInInput, res: Response) {
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

    await this.generateToken({ id: user.id }, res);

    return { user };
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

  async generateToken(user: JwtPayload, res: Response) {
    const accessToken = await this.jwtService.signAsync(
      { id: user.id },
      {
        secret: this.configService.getOrThrow('JWT_ACCESS_SECRET'),
        expiresIn: this.configService.getOrThrow('JWT_ACCESS_EXPIRES_IN'),
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      { id: user.id },
      {
        secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
        expiresIn: this.configService.getOrThrow('JWT_REFRESH_EXPIRES_IN'),
      },
    );

    console.log('=== TOKEN DEBUG ===');
    console.log(
      'accessToken generated:',
      !!accessToken,
      'length:',
      accessToken?.length,
    );
    console.log(
      'refreshToken generated:',
      !!refreshToken,
      'length:',
      refreshToken?.length,
    );

    console.log('Response object has cookie method:', typeof res.cookie);

    res.cookie('accessToken', accessToken, {
      httpOnly: false,
      secure: false,
      maxAge: 15 * 60 * 1000,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: false,
      secure: false,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    const setCookieHeaders = res.getHeader('Set-Cookie');
    console.log('Set-Cookie headers:', setCookieHeaders);

    return { accessToken, refreshToken };
  }
}
