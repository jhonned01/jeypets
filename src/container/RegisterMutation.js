import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Title,
  Error,
} from "../components/userForn/style";

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
          disabled={mutationLoading}
        />
        <Input
          type="password"
          placeholder={"Contraseña"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={mutationLoading}
        />

        <Button type="submit" disabled={mutationLoading}>
          {title}
        </Button>
      </Form>
      {mutationLoading && <span>Loading...</span>}
      {mutationError && (
        <Error>El usuario ya existe o hay algun problema</Error>
      )}
    </>
  );
};

export default RegisterMutation;