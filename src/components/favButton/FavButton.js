import PropTypes from "prop-types";
import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";

export default function FavButton({ liked, likes, onClick }) {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" />
      {likes}
    </Button>
  );
}

FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func,
};
