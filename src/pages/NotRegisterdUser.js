import React, { useContext } from "react";
import { UserContext } from "../Context";
import useForm from "../components/userForn/useForm.jsx";

export default function NotRegisterdUser() {
  // const [{}, dispatch] = useStateValue();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: "LOGIN",
  //   });
  // };
  // return (
  //   <form onSubmit={(e) => handleSubmit(e)}>
  //     <button>Iniciar sesión</button>
  //   </form>
  // );

  let { Login, Logout, user } = useContext(UserContext);

  let { isAuth } = user;
  return (
    <div>
      {isAuth ? (
        <button onClick={Logout}>hola puto</button>
      ) : (
        <useForm onSubmit={Login} />
      )}
    </div>
  );
}
