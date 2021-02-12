import React from "react";
import { Helmet } from "react-helmet";
export default function Layout({ children, title, subtitle }) {
  return (
    <>
      <Helmet>
        {title && <title>{title} | JeyPet</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <div>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
      </div>

      {children}
    </>
  );
}
