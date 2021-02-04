import React from "react";
import RegisterMutation from "../../container/RegisterMutation";

export default function FormUserRegister({ onSubmit, title }) {
  return (
    <>
      <RegisterMutation onSubmit={onSubmit} title={title} />
    </>
  );
}
