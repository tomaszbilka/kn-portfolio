import { gql } from '@apollo/client';
import { CORE_USER_FIELDS } from '../fragments';

export const CREATE_USER = gql`
  ${CORE_USER_FIELDS}
  mutation CreateUser($name: String!, $lastName: String!, $address: String!) {
    createUser(name: $name, lastName: $lastName, address: $address) {
      ...CoreUserFields
    }
  }
`;
