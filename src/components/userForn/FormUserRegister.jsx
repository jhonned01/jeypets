import React, { useState } from "react";
import { Form, Input, Button, Title, Error } from "./style";

export default function FormUserRegister({
  onSubmit,
  title,
  disable,
  error,
  data,
  mutation,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("si cargo");
  console.log(disable);
  console.log("====================================");
  return (
    <>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          await mutation({ email, password });
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
          disabled={disable}
        />
        <Input
          type="password"
          placeholder={"Contraseña"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={disable}
        />

        <Button type="submit" disabled={disable}>
          {title}
        </Button>
      </Form>
      {disable && <r>Loading...</r>}
      {error && <Error>El usuario ya existe o hay algun problema</Error>}
    </>
  );
}
