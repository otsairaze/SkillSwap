export type User = {
  id: number;
  login: string;
  email: string;
};

export type MeResponse = {
  me: User;
};

export type MeQueryVariables = Record<string, never>;
