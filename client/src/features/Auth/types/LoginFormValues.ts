import type { LoginSchema } from '../schemas/loginSchema';
import type { z } from 'zod';

export type LoginFormValues = z.infer<typeof LoginSchema>;
