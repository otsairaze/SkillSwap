import type { User } from '../types/user.types';

export type AuthResponse = {
  user: User;
};

export type SignUpResponse = {
  signUp: AuthResponse;
};

export type SignInResponse = {
  signIn: AuthResponse;
};

export type SignUpInput = {
  email: string;
  login: string;
  password: string;
};

export type SignInInput = {
  login: string;
  password: string;
};
