import React, { useContext, useState } from "react";
import { UserContext } from "../Context";
import FormUserRegister from "../components/userForn/FormUserRegister.jsx";
import useLoginMutation from "../container/useLoginMutation";
import useRegisterMutation from "../container/useRegisterMutation";
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

  const [notRegister, setNotRegister] = useState(true);

  const {
    loginUser,
    data: dataLogin,
    loading: loadingLogin,
    error: ErrorLogin,
  } = useLoginMutation();

  const {
    registerUser,
    data: dataRegister,
    loading: loadingRegister,
    error: ErrorRegister,
  } = useRegisterMutation();

  const handleClickRegister = (e) => {
    e.preventDefault();
    setNotRegister(!notRegister);
  };

  return (
    <div>
      {user ? (
        <button onClick={Logout}>hola puto</button>
      ) : (
        <>
          <FormUserRegister
            onSubmit={Login}
            title={"Regristro Usuario"}
            disable={loadingRegister}
            Error={ErrorRegister}
            data={dataRegister}
            mutation={registerUser}
          />

          <button
            onClick={(e) => {
              handleClickRegister(e);
            }}
          >
            Registrar Usuario ?
          </button>

          <FormUserRegister
            onSubmit={Login}
            title={"Iniciar sesion"}
            disable={loadingLogin}
            error={ErrorLogin}
            data={dataLogin}
            mutation={loginUser}
          />
        </>
      )}
    </div>
  );
}
