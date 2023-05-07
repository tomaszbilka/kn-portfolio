import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String!, $lastName: String!, $address: String!) {
    updateUser(id: $id, name: $name, lastName: $lastName, address: $address) {
      name
      lastName
      address
    }
  }
`;
