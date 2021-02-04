import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const useLoginMutation = ({ email, password }) => {
  const [login, { data, error, loading }] = useMutation(REGISTER);

  const loginUser = ({ email, password }) => {
    login({ variables: { input: { email, password } } });
  };
  return { loginUser, data, error, loading };
};

export default useLoginMutation;
