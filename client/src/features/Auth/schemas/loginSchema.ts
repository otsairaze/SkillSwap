import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.email('Invalid email'),
  password: z.string(),
});
