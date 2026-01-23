// import {
//   Injectable,
//   NestMiddleware,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { NextFunction, Request, Response } from 'express';
// import { ConfigService } from '@nestjs/config';
// import { JwtService } from '@nestjs/jwt';
//
// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   constructor(
//     private readonly configService: ConfigService,
//     private readonly jwtService: JwtService,
//   ) {}
//
//   async use(req: Request, res: Response, next: NextFunction) {
//     const accessToken = req.cookies['accessToken'];
//     const refreshToken = req.cookies['refreshToken'];
//
//     console.log(accessToken, 'accesstoken');
//
//     if (accessToken) {
//       try {
//         await this.jwtService.verifyAsync(accessToken, {
//           secret: this.configService.getOrThrow('JWT_ACCESS_SECRET'),
//         });
//
//         console.log('ALl ok');
//
//         return next();
//       } catch (error) {
//         console.error('Middleware: accesstoken expired', error.message);
//       }
//     }
//
//     if (refreshToken) {
//       try {
//         const payload = await this.jwtService.verifyAsync(refreshToken, {
//           secret: this.configService.getOrThrow('JWT_REFRESH_SECRET'),
//         });
//
//         console.log(payload, 'payload');
//
//         const newAccessToken = await this.jwtService.signAsync(
//           {
//             id: payload.id,
//           },
//           {
//             secret: this.configService.getOrThrow('JWT_ACCESS_SECRET'),
//             expiresIn: this.configService.getOrThrow('JWT_ACCESS_EXPIRES_IN'),
//           },
//         );
//
//         console.log(newAccessToken, 'Token was updated successfully.');
//
//         res.cookie('accessToken', newAccessToken, {
//           httpOnly: true,
//           secure: false,
//           sameSite: 'lax',
//           maxAge: 15 * 60 * 1000,
//         });
//
//         req.cookies.accessToken = newAccessToken;
//         console.log('new cookie updated', newAccessToken);
//         return next();
//       } catch (error) {
//         throw new UnauthorizedException('Session expired', error.message);
//       }
//     }
//     console.log('Middleware: No valid tokens at all');
//     throw new UnauthorizedException('No valid tokens');
//   }
// }
