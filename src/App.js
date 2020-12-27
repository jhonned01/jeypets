import React from "react";
import ListOfCategories from "./components/listOfCategories/ListOfCategories";
import { GlobalStyle } from "./styles/globalStyles";
import ListOfPhotoCard from "./components/listOfPhotoCards/listOfPhotoCards";
import Logo from "./components/logo/logo";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  );
}
