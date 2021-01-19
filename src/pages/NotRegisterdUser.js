import React, { useContext } from "react";
import { UserContext } from "../Context";

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
        <form onSubmit={Login} Login>
          <button>Iniciar Sesion </button>
        </form>
      )}
    </div>
  );
}
