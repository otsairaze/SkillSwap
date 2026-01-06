import { gql } from '@apollo/client';
import { USER_FRAGMENT } from '../fragments/user.fragment';

export const SIGN_UP_MUTATION = gql`
  ${USER_FRAGMENT}
  mutation SignUp($input: SignupInput!) {
    signUp(signUpInput: $input) {
      user {
        ...UserFields
      }
    }
  }
`;
