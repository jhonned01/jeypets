import React from "react";
import PhotoCard from "../components/photoCard/PhotoCard";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/LoadingComponent/loading";

const getSinglePhoto = gql`
  query SinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export default function PhotoCardWithQuery({ id }) {
  const { loading, error, data } = useQuery(getSinglePhoto, {
    variables: { id },
  });

  if (error) {
    return <div>error ...</div>;
  } else if (loading) {
    return <Loading />;
  } else if (data) {
    const { photo } = data;

    return <PhotoCard {...photo}></PhotoCard>;
  }
}
