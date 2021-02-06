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

  return (
    <>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          await mutation({ email, password });
          if (data) {
            console.log("data:");
            const { login } = data;

            await onSubmit({ login });
          }
        }}
      >
        <Title>{title}</Title>
        <Input
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          type="email"
          required
          disabled={disable}
        />
        <Input
          type="password"
          placeholder={"Contraseña"}
          value={password}
          onChange={(e) => setPassword(e.target.value.toLowerCase())}
          required
          disabled={disable}
        />

        <Button type="submit" disabled={disable}>
          {title}
        </Button>
      </Form>
      {disable && <p>Loading...</p>}
      {error && <Error>El usuario ya existe o hay algun problema</Error>}
    </>
  );
}
