import type { RegisterSchema } from '../schemas/register-schema';
import type { z } from 'zod';

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
