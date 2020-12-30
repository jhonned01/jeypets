import React from "react";
import ListOfCategories from "./components/listOfCategories/ListOfCategories";
import { GlobalStyle } from "./styles/globalStyles";
import ListOfPhotoCard from "./components/listOfPhotoCards/ListOfPhotoCards";
import Logo from "./components/logo/logo";
import PhotoCardWithQuery from "./container/PhotoCardWithQuery";

export default function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCard categoryID={2} />
        </>
      )}
    </>
  );
}
