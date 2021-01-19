import React, { useState } from "react";

export default function useForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form onSubmit={onSubmit} Login>
      <input
        placeholder={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder={"Email"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Iniciar Sesion </button>
    </form>
  );
}
