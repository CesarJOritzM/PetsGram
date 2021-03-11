import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
const useLogin = () => {
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  return { login, loading, error };
};

export default useLogin;
