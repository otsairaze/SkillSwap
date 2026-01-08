'use client';

import { memo, useEffect } from 'react';
import { useGetMe } from '@/features/Auth';
import { useAuthStore } from '@/shared/store/AuthStore';
import type { JSX } from 'react';

interface GuardProps {
  children: JSX.Element;
  excludedRoutes?: string[];
}

export const Guard = memo((props: GuardProps) => {
  const { children, excludedRoutes } = props;

  const { user: graphqlUser } = useGetMe();
  const { setUser } = useAuthStore();

  useEffect(() => {
    if (graphqlUser) {
      setUser(graphqlUser);
    } else {
      setUser(null);
    }
  }, [setUser, graphqlUser]);

  return <>{children}</>;
});
