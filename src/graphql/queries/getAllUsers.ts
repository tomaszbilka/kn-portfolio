import { gql } from '@apollo/client';

export default gql`
  query GetAllUsers($skipAddress: Boolean!, $includeLastName: Boolean!) {
    usersAlias: allUsers {
      id
      name
      lastName @include(if: $includeLastName)
      address @skip(if: $skipAddress)
    }
  }
`;
