import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const useRegisterMutation = () => {
  const [register, { data, error, loading }] = useMutation(REGISTER);

  const registerUser = async ({ email, password }) => {
    await register({ variables: { input: { email, password } } });
  };

  return { registerUser, data, error, loading };
};
export default useRegisterMutation;
