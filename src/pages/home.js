import React from "react";

import ListOfPhotoCard from "../components/listOfPhotoCards/ListOfPhotoCards";
import ListOfCategories from "../components/listOfCategories/ListOfCategories";
import { Helmet } from "react-helmet";

export default function home({ id }) {
  return (
    <>
      <Helmet>
        <title>JeyPet - Tu app de fotos de mascotas</title>
        <meta
          name="description"
          content="con JeyPet puedes encontrar fotos de animales domesticos muy bonitos"
          charSet="utf-8"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCard categoryID={id} />
    </>
  );
}
