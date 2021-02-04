import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const useRegisterMutation = (email, password) => {
  const [register, { data, error, loading }] = useMutation(REGISTER);

  console.log("email");
  console.log(email);
  console.log("====================================");
  const registerUser = ({ email, password }) => {
    register({ variables: { input: { email, password } } });
  };

  return { registerUser, data, error, loading };
};
export default useRegisterMutation;
