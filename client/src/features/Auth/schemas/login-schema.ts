import { z } from 'zod';

export const LoginSchema = z.object({
  login: z.string('Invalid login'),
  password: z.string(),
});
