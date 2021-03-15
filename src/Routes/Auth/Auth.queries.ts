import { gql } from "apollo-boost";

export const SIGN_UP = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(input: { email: $email, username: $username, password: $password }) {
      token
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export const LOCAL_SIGN_IN = gql`
  mutation localSignIn($token: String!) {
    localSignIn(token: $token) @client
  }
`;
