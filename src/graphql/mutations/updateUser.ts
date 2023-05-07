import { gql } from '@apollo/client';
import { CORE_USER_FIELDS } from '../fragments';

export const UPDATE_USER = gql`
  ${CORE_USER_FIELDS}
  mutation UpdateUser($id: ID!, $name: String!, $lastName: String!, $address: String!) {
    updateUser(id: $id, name: $name, lastName: $lastName, address: $address) {
      ...CoreUserFields
    }
  }
`;
