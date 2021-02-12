import React from "react";
import { Helmet } from "react-helmet";
import { Div, Title, Subtitle } from "./styles";
export default function Layout({ children, title, subtitle }) {
  return (
    <>
      <Helmet>
        {title && <title>{title} | JeyPet</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Div>

      {children}
    </>
  );
}
