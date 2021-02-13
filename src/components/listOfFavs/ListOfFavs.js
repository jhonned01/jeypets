import React from "react";
import useGetFavorite from "../../container/useGetFavorite";
import { Grid, Image, Link } from "./styles";

export default function ListOfFavs() {
  const { data, loading, error } = useGetFavorite();

  if (error) {
    return <p>{error}</p>;
  } else if (loading) {
    return <p>Loading ...</p>;
  } else if (data) {
    return (
      <Grid>
        {data.favs.map((fav) => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        ))}
      </Grid>
    );
  }
}
