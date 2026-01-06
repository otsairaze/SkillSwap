'use client';

import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs';
import { makeClient } from '@/shared/api/apollo/client';
import type { ReactNode } from 'react';

interface ApolloProviderProps {
  children: ReactNode;
}

export const ApolloProvider = (props: ApolloProviderProps) => {
  const { children } = props;

  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
