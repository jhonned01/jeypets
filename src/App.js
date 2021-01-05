import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Logo from "./components/logo/logo";
import Home from "./pages/home";
import Favs from "./pages/Favs";
import User from "./pages/User";
import NotRegisterdUser from "./pages/NotRegisterdUser";

import Detail from "./pages/Detail";
import { Router } from "@reach/router";
import NavBar from "./components/navBar/NavBar";

const UserLooged = ({ children }) => {
  return children({ isAuth: false });
};

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>

      <UserLooged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs/" />
              <User path="/user/" />
            </Router>
          ) : (
            <Router>
              <NotRegisterdUser path="/favs" />
              <NotRegisterdUser path="/user" />
            </Router>
          )
        }
      </UserLooged>
      <NavBar />
    </>
  );
}
