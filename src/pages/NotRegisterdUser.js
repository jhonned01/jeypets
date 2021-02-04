import React, { useContext } from "react";
import { UserContext } from "../Context";
import FormUserRegister from "../components/userForn/FormUserRegister.jsx";
import { useLoginMutation } from "../container/useLoginMutation";
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

  const {
    loginUser,
    data: dataLogin,
    error: ErrorLogin,
    loading: loadingLogin,
  } = useLoginMutation();
  return (
    <div>
      {isAuth ? (
        <button onClick={Logout}>hola puto</button>
      ) : (
        <>
          <FormUserRegister onSubmit={Login} title={"Regristro Usuario"} />
          <FormUserRegister
            loginUser={loginUser}
            onSubmit={Login}
            title={"Iniciar sesion"}
          />
        </>
      )}
    </div>
  );
}
