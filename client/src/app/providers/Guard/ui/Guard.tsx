'use client';

import { memo } from 'react';
import { useGetMe } from '@/features/Auth';
import type { JSX } from 'react';

interface GuardProps {
  children: JSX.Element;
  excludedRoutes?: string[];
}

export const Guard = memo((props: GuardProps) => {
  const { children, excludedRoutes } = props;

  const { user } = useGetMe();

  console.log(user, 'check data user');

  return <>{children}</>;
});
