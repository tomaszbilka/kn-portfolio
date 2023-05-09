export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createUser?: Maybe<User>;
  removeUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};

export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export type MutationCreateUserArgs = {
  address: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
};

export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateUserArgs = {
  address?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  User?: Maybe<User>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  name: Scalars['String'];
};

export type UserFilter = {
  address?: InputMaybe<Scalars['String']>;
  address_neq?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_neq?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};

export type UserInput = {
  address: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
};
