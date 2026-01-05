'use client';

import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';
import type { ReactNode } from 'react';

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    credentials: 'same-origin',
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

interface ApolloProviderProps {
  children: ReactNode;
}

export const ApolloProvider = (props: ApolloProviderProps) => {
  const { children } = props;

  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
