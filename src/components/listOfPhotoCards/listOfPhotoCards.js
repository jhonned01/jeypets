import React from "react";
import PhotoCard from "../photoCard/photoCard";

export default function () {
  return (
    <ul>
      {[1, 2, 3, 4].map((id) => (
        <PhotoCard key={id} />
      ))}
    </ul>
  );
}
