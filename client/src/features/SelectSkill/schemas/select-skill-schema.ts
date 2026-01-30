import { z } from 'zod';

export const SkillSchema = z.object({
  name: z.string().max(24),
  // category: z.array(
  //   z.object({
  //     name: z.string('Choose skill category'),
  //   }),
  ),
});
