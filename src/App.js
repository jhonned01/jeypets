import React, { useContext } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Logo from "./components/logo/logo";
import Home from "./pages/home";
import Favs from "./pages/Favs";
import User from "./pages/User";
import NotRegisterdUser from "./pages/NotRegisterdUser";

import Detail from "./pages/Detail";
import { Router, Redirect } from "@reach/router";
import NavBar from "./components/navBar/NavBar";
import { UserContext } from "./Context.js";
import NotFound from "./pages/NotFound";

export default function App() {
  let { user } = useContext(UserContext);

  console.log("user app:");
  console.log(user);
  console.log("====================================");

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!user && <NotRegisterdUser path="/login" />}
        {!user && <Redirect from="/favs" to="/login" />}

        {!user && <Redirect from="/user" to="/login" />}
        {user && <Redirect from="/user" to="/login" />}

        <Favs path="/favs/" />
        <User path="/user/" />
      </Router>

      <NavBar />
    </>
  );
}
