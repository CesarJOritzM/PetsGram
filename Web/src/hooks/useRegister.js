import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const REGISTER_MUTATION = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
const useRegister = () => {
  const [register, { loading, error }] = useMutation(REGISTER_MUTATION);
  return { register, loading, error };
};

export default useRegister;
