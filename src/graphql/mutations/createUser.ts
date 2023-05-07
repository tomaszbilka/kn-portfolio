import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $lastName: String!, $address: String!) {
    createUser(name: $name, lastName: $lastName, address: $address) {
      name
      lastName
      address
    }
  }
`;
