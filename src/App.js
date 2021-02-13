import React, { useContext, lazy, Suspense } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Logo from "./components/logo/logo";
import { Home } from "./pages/Home";
import User from "./pages/User";
import NotRegisterdUser from "./pages/NotRegisterdUser";

import { Router, Redirect } from "@reach/router";
import NavBar from "./components/navBar/NavBar";
import { UserContext } from "./Context.js";

const Favs = lazy(() => import("./pages/Favs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Detail = lazy(() => import("./pages/Detail"));

export default function App() {
  let { user } = useContext(UserContext);

  return (
    <Suspense fallback={<div />}>
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
        {user && <Redirect from="/login" to="/" />}

        <Favs path="/favs/" />
        <User path="/user/" />
      </Router>

      <NavBar />
    </Suspense>
  );
}
