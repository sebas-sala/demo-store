'use client';

import client from '@/lib/graphql-client';
import { ApolloProvider } from '@apollo/client';

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
