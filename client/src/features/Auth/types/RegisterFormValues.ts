import type { RegisterSchema } from '../schemas/registerSchema';
import type { z } from 'zod';

export type RegisterFormValues = z.infer<typeof RegisterSchema>;
