import React from "react";
import PhotoCardWithQuery from "../container/PhotoCardWithQuery";
import Layout from "../components/Layout/Layout";

export default function Detail({ detailId }) {
  return (
    <Layout title={`Fotografia ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
}
