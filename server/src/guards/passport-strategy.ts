import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import { UserService } from '@modules/user';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../types/jwt.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    const options: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow('JWT_ACCESS_SECRET'),
    };
    super(options);
    console.log(options, 'options.secretOrKey');
  }

  async validate(payload: JwtPayload) {
    const { id } = payload;

    const user = await this.userService.getUserById(id);

    if (!user || !payload) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
