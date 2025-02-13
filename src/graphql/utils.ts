// interface GraphQLResult {
//   data: unknown;
//   loading: boolean;
//   networkStatus: number;
//   error?: Error;
//   errors?: Error;
//   partial: boolean;
// }

import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export const graphqlHandler = async (
  callback: () => Promise<ApolloClient<NormalizedCacheObject>>
) => {
  try {
    return await callback();
  } catch (error) {
    console.error(error);
    return {
      data: null,
      loading: false,
      networkStatus: 0,
      error: error,
      errors: error,
      partial: false,
    };
  }
};
