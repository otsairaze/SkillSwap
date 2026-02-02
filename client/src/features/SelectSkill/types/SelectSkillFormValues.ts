import type { SkillSchema } from '../schemas/select-skill-schema';
import type { z } from 'zod';

export type SelectSkillFormValues = z.infer<typeof SkillSchema>;
