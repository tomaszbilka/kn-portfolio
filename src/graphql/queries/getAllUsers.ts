import { gql } from '@apollo/client';

export default gql`
  query GetAllUsers {
    usersAlias: allUsers {
      id
      name
      lastName
      address
    }
  }
`;
