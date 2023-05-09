import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';

export const client = new ApolloClient({
  uri: 'http://localhost:3008/',
  cache: new InMemoryCache({
    fragments: createFragmentRegistry(
      gql`
        fragment CoreUserFields on User {
          name
          lastName
          address
        }
      `,
    ),
  }),
});
