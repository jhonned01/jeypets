import React from "react";
import PhotoCardWithQuery from "../container/PhotoCardWithQuery";

export default function Detail({ detailId }) {
  return <PhotoCardWithQuery id={detailId} />;
}
