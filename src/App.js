import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Logo from "./components/logo/logo";
import PhotoCardWithQuery from "./container/PhotoCardWithQuery";
import Home from "./pages/home";

export default function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? <PhotoCardWithQuery id={detailId} /> : <Home />}
    </>
  );
}
