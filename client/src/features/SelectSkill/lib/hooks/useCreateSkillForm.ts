import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateSkill } from '../../lib/hooks/useCreateSkill';
import { SkillSchema } from '../../schemas/select-skill-schema';
import type { SelectSkillFormValues } from '../../types/SelectSkillFormValues';

export const useCreateSkillForm = () => {
  const { createSkill, loading, error, data } = useCreateSkill();

  const form = useForm<SelectSkillFormValues>({
    resolver: zodResolver(SkillSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (values: SelectSkillFormValues) => {
    try {
      const skill = await createSkill(values);

      if (skill) {
        console.log(skill, 'Навык отправлен в обработку');
      }
    } catch (error) {
      throw error;
    }
  };

  return { onSubmit, form, loading, error };
};
