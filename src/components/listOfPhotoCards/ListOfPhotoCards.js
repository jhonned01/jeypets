import React from "react";
import PhotoCard from "../photoCard/PhotoCard";
import Loading from "../LoadingComponent/loading";
import { useGetPhotos } from "../../hoc/useGetPhoto";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ListOfPhotoCards({ categoryID }) {
  const { loading, error, data } = useGetPhotos(categoryID);
  // console.log(data);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data.photos.map((photoCard) => (
        <PhotoCard key={photoCard.id} {...photoCard} />
      ))}
    </ul>
  );
}
