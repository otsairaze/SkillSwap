import { gql } from '@apollo/client';
import { USER_FRAGMENT } from '../fragments/user.fragment';

export const SIGN_IN_MUTATION = gql`
  ${USER_FRAGMENT}
  mutation SignIn($input: SignInInput!) {
    signIn(signInInput: $input) {
      user {
        ...UserFields
      }
    }
  }
`;
