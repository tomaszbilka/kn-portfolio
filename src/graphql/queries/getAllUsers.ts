import { gql } from '@apollo/client';

export default gql`
  query GetAllUsers {
    allUsers {
      id
      name
      lastName
      address
    }
  }
`;
