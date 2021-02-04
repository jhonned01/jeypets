import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const useRegisterMutation = (email, pasword) => {
  const [login, { data, error, loading }] = useMutation(REGISTER);

  const loginUser = (email, password) => {
    login({ variables: { input: { email, pasword } } });
  };
  return { loginUser, data, error, loading };
};

export default useRegisterMutation;
