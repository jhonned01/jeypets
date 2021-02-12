import React from "react";

import { ListOfPhotoCards } from "../components/listOfPhotoCards/ListOfPhotoCards";
import { ListOfCategories } from "../components/listOfCategories/ListOfCategories";
import { Helmet } from "react-helmet";

function homePage({ id }) {
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
      <ListOfPhotoCards categoryID={id} />
    </>
  );
}

export const Home = React.memo(homePage, (prevProps, props) => {
  return prevProps.id === props.id;
});
