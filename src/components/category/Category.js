import React from "react";
import { Link, Image } from "./styles";

export default function Category({ path, emoji, cover }) {
  return (
    <div>
      <Link to={path}>
        <Image src={cover} alt="default image" />
        {emoji}
      </Link>
    </div>
  );
}
