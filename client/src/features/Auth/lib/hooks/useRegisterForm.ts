'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignUp } from '../../lib/hooks/useSignUp';
import { RegisterSchema } from '../../schemas/register-schema';
import type { RegisterFormValues } from '../../types/RegisterFormValues';

export const useRegisterForm = () => {
  const { signUp, loading, error } = useSignUp();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      login: '',
      password: '',
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      const result = await signUp(values);

      if (result) {
        console.log(result, 'Успешный вход');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { onSubmit, form, loading, error };
};
