import React from "react";
import { Anchor, Image } from "./styles";

export default function Category({ path, emoji, cover }) {
  return (
    <div>
      <Anchor href={path}>
        <Image src={cover} alt="default image" />
        {emoji}
      </Anchor>
    </div>
  );
}
