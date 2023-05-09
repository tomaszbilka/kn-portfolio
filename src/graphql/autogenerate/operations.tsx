import * as Types from './schemas';

export type CoreUserFieldsFragment = {
  __typename?: 'User';
  name: string;
  lastName: string;
  address: string;
};

export type CreateUserMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
  address: Types.Scalars['String'];
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser?: {
    __typename?: 'User';
    name: string;
    lastName: string;
    address: string;
  } | null;
};

export type RemoveUserMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type RemoveUserMutation = {
  __typename?: 'Mutation';
  removeUser?: { __typename?: 'User'; id: string } | null;
};

export type UpdateUserMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  name: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
  address: Types.Scalars['String'];
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser?: {
    __typename?: 'User';
    name: string;
    lastName: string;
    address: string;
  } | null;
};

export type GetAllUsersQueryVariables = Types.Exact<{
  skipAddress: Types.Scalars['Boolean'];
  includeLastName: Types.Scalars['Boolean'];
}>;

export type GetAllUsersQuery = {
  __typename?: 'Query';
  usersAlias?: Array<{
    __typename?: 'User';
    id: string;
    name: string;
    lastName?: string;
    address?: string;
  } | null> | null;
};
