import React, { useContext } from "react";
import { UserContext } from "../Context";
import UseForm from "../components/userForn/useForm.jsx";

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
        <>
          <UseForm onSubmit={Login} title={"Regristro Usuario"} />
          <UseForm onSubmit={Login} title={"Iniciar sesion"} />
        </>
      )}
    </div>
  );
}
