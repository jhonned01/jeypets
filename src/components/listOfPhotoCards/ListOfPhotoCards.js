import React from "react";
import PhotoCard from "../photoCard/PhotoCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
        <PhotoCard key={id} />
      ))}
    </ul>
  );
}
