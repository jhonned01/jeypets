import React, { useContext } from "react";
import { Button } from "./styles";
import { UserContext } from "../../Context";

export default function Logout() {
  const { Logout } = useContext(UserContext);

  return <Button onClick={Logout}>Cerrar Seccion</Button>;
}
