'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignIn } from '../../lib/hooks/useSignIn';
import { LoginSchema } from '../../schemas/login-schema';
import type { LoginFormValues } from '../../types/LoginFormValues';

export const useLoginForm = () => {
  const { signIn, loading, error } = useSignIn();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    mode: 'onSubmit',
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const result = await signIn(values);

      if (result) {
        console.log(result, 'Успешный вход');
      }
    } catch (error) {
      console.log(error, 'Ошибка входа');
    }
  };

  return { onSubmit, form, loading, error };
};
