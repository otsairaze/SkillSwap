import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from '@shared/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@guards/passport-strategy';
import { UserService } from '@modules/user';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthMiddleware } from '@common/middleware/refresh-token-middlware';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    PrismaService,
    JwtStrategy,
    UserService,
    AuthMiddleware,
  ],
})
export class AuthModule {}
