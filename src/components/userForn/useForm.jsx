import React, { useState } from "react";
import { Form, Input, Button, Title } from "./style";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const OnChange = (e) => setValue(e.target.value);

  return { value, OnChange };
};

export default function useForm({ onSubmit, title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder={"Contraseña"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button>{title}</Button>
      </Form>
    </>
  );
}
