import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Form, Input, Button, Title } from "../components/userForn/style";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const RegisterMutation = ({ onSubmit, title }) => {
  const [
    register,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(REGISTER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          await register({
            variables: {
              input: {
                email: email,
                password: password,
              },
            },
          });
          await onSubmit();
        }}
      >
        <Title>{title}</Title>
        <Input
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <Input
          type="password"
          placeholder={"Contraseña"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit">{title}</Button>
      </Form>
      {mutationLoading && <span>Loading...</span>}
      {mutationError && <span>Error :( Please try again</span>}
    </>
  );
};

export default RegisterMutation;
