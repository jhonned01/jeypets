import React from "react";
import PhotoCard from "../components/photoCard/PhotoCard";
import { gql, Query } from "@apollo/client";

export default function PhotoCardWithQuery({ id }) {
  const query = gql`
    query getSinglePhoto($id: ID!) {
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

  return (
    <Query query={query} variables={{ id }}>
      {({ loading, error, data = { photo: {} } }) => {
        const { photo = {} } = data;
        return <PhotoCard {...photo}></PhotoCard>;
      }}
    </Query>
  );
}
