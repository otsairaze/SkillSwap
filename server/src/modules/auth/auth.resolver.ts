import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { AuthResponse } from '@modules/auth/models';
import { SignInInput, SignupInput } from './dto';
import { MeResponse } from './models';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@guards/jwt-auth-guard';
import { CurrentUser } from '@common/decorators/current-user.decorator';
import { Response } from 'express';
import { JwtPayload } from '../../types/jwt.types';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async signUp(
    @Args('signUpInput') input: SignupInput,
    @Context() context: { res: Response },
  ) {
    return this.authService.signup(input, context.res);
  }

  @Mutation(() => AuthResponse)
  async signIn(
    @Args('signInInput') input: SignInInput,
    @Context() context: { res: Response },
  ) {
    return this.authService.signin(input, context.res);
  }

  @Query(() => MeResponse)
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: JwtPayload) {
    return this.authService.me(user);
  }
}
