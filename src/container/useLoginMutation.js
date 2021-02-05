import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const useLoginMutation = () => {
  const [login, { data, error, loading }] = useMutation(LOGIN);

  const loginUser = async ({ email, password }) => {
    console.log("email:");
    console.log(email);
    console.log("====================================");
    console.log("password:");
    console.log(password);
    console.log("====================================");
    await login({ variables: { input: { email, password } } });
  };
  return { loginUser, data, error, loading };
};

export default useLoginMutation;
