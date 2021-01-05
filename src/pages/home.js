import React from "react";

import ListOfPhotoCard from "../components/listOfPhotoCards/ListOfPhotoCards";
import ListOfCategories from "../components/listOfCategories/ListOfCategories";

export default function home({ id }) {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryID={id} />
    </>
  );
}
