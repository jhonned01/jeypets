import React from "react";
import ListOfFavs from "../components/listOfFavs/ListOfFavs";
import Layout from "../components/Layout/Layout";

export default () => {
  return (
    <Layout>
      <ListOfFavs
        title="Tus Favoritos"
        subtitle="Aqui puedes encontrar tus mascotas favoritas"
      />
    </Layout>
  );
};
