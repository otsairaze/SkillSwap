import type { LoginSchema } from '../schemas/login-schema';
import type { z } from 'zod';

export type LoginFormValues = z.infer<typeof LoginSchema>;
