'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '../../schemas/registerSchema';
import type { RegisterFormValues } from '../../types/RegisterFormValues';

export const useRegisterForm = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      login: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: RegisterFormValues) => {
    console.log(values);
  };

  return { onSubmit, form };
};
