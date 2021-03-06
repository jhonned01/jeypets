import { createContext, useState } from "react";

const UserContext = createContext();
const { Provider, Consumer } = UserContext;

export default function UserProvider({ children }) {
  let [user, setUser] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const Login = (token) => {
    setUser(token);
    window.sessionStorage.setItem("token", token);
  };

  function Logout() {
    setUser(false);
    window.sessionStorage.removeItem("token");
  }

  return <Provider value={{ Login, Logout, user }}>{children}</Provider>;
}

export { UserProvider, Consumer as UserConsumer, UserContext };

// context implementado de forma maravillosa
// import React, { createContext, useReducer, useContext } from "react";

// const Context = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return {
//         ...state,
//         isAuth: true,
//       };
//     default:
//       return state;
//   }
// };

// const initialState = {
//   isAuth: false,
// };

// export const Provider = ({ children }) => {
//   return (
//     <Context.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </Context.Provider>
//   );
// };

// export const useStateValue = () => useContext(Context);
