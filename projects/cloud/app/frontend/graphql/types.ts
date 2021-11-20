import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Returns all tied accounts for the authenticated user */
  accounts: Array<Account>;
  /** Returns the authenticated user */
  me: User;
  /** Returns all available organizations for the authenticated user */
  organizations: Array<Organization>;
  /** Returns all available projects for the authenticated user */
  projects: Array<Project>;
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  organizations: Array<Organization>;
  projects: Array<Project>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, avatarUrl?: string | null | undefined } };

export type MyAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyAccountsQuery = { __typename?: 'Query', accounts: Array<{ __typename?: 'Account', id: string, name: string }> };

export type MyOrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyOrganizationsQuery = { __typename?: 'Query', organizations: Array<{ __typename?: 'Organization', name: string }> };

export type MyProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', name: string }> };


export const MeDocument = gql`
    query Me {
  me {
    id
    email
    avatarUrl
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MyAccountsDocument = gql`
    query MyAccounts {
  accounts {
    id
    name
  }
}
    `;

/**
 * __useMyAccountsQuery__
 *
 * To run a query within a React component, call `useMyAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyAccountsQuery(baseOptions?: Apollo.QueryHookOptions<MyAccountsQuery, MyAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyAccountsQuery, MyAccountsQueryVariables>(MyAccountsDocument, options);
      }
export function useMyAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyAccountsQuery, MyAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyAccountsQuery, MyAccountsQueryVariables>(MyAccountsDocument, options);
        }
export type MyAccountsQueryHookResult = ReturnType<typeof useMyAccountsQuery>;
export type MyAccountsLazyQueryHookResult = ReturnType<typeof useMyAccountsLazyQuery>;
export type MyAccountsQueryResult = Apollo.QueryResult<MyAccountsQuery, MyAccountsQueryVariables>;
export const MyOrganizationsDocument = gql`
    query MyOrganizations {
  organizations {
    name
  }
}
    `;

/**
 * __useMyOrganizationsQuery__
 *
 * To run a query within a React component, call `useMyOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOrganizationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyOrganizationsQuery(baseOptions?: Apollo.QueryHookOptions<MyOrganizationsQuery, MyOrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyOrganizationsQuery, MyOrganizationsQueryVariables>(MyOrganizationsDocument, options);
      }
export function useMyOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyOrganizationsQuery, MyOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyOrganizationsQuery, MyOrganizationsQueryVariables>(MyOrganizationsDocument, options);
        }
export type MyOrganizationsQueryHookResult = ReturnType<typeof useMyOrganizationsQuery>;
export type MyOrganizationsLazyQueryHookResult = ReturnType<typeof useMyOrganizationsLazyQuery>;
export type MyOrganizationsQueryResult = Apollo.QueryResult<MyOrganizationsQuery, MyOrganizationsQueryVariables>;
export const MyProjectsDocument = gql`
    query MyProjects {
  projects {
    name
  }
}
    `;

/**
 * __useMyProjectsQuery__
 *
 * To run a query within a React component, call `useMyProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyProjectsQuery(baseOptions?: Apollo.QueryHookOptions<MyProjectsQuery, MyProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyProjectsQuery, MyProjectsQueryVariables>(MyProjectsDocument, options);
      }
export function useMyProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyProjectsQuery, MyProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyProjectsQuery, MyProjectsQueryVariables>(MyProjectsDocument, options);
        }
export type MyProjectsQueryHookResult = ReturnType<typeof useMyProjectsQuery>;
export type MyProjectsLazyQueryHookResult = ReturnType<typeof useMyProjectsLazyQuery>;
export type MyProjectsQueryResult = Apollo.QueryResult<MyProjectsQuery, MyProjectsQueryVariables>;