import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = this.getRequest(context);
    const res = GqlExecutionContext.create(context).getContext().res;

    const access = req.cookies['accessToken'];
    const refresh = req.cookies['refreshToken'];

    if (access) {
      try {
        const payload = await this.jwtService.verifyAsync(access, {
          secret: this.config.get('JWT_ACCESS_SECRET'),
        });

        req.user = payload;
        return true;
      } catch (error) {
        throw new UnauthorizedException(error, 'jwt-auth-guard');
      }
    }

    if (refresh) {
      try {
        const payload = await this.jwtService.verifyAsync(refresh, {
          secret: this.config.get('JWT_REFRESH_SECRET'),
        });

        const newAccess = await this.jwtService.signAsync(
          { id: payload.id },
          {
            secret: this.config.get('JWT_ACCESS_SECRET'),
            expiresIn: this.config.get('JWT_ACCESS_EXPIRES_IN'),
          },
        );

        res.cookie('accessToken', newAccess, {
          httpOnly: true,
          sameSite: 'lax',
        });

        req.user = payload;
        return true;
      } catch (error) {
        throw new UnauthorizedException('Session expired.', error);
      }
    }

    throw new UnauthorizedException('Not authenticated.');
  }
}
