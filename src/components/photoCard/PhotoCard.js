import React, { useRef, useEffect, useState, Fragment } from "react";
import { ImgWrapper, Img, Article } from "./styles";
import FavButton from "../favButton/FavButton";
import { useLikePhoto } from "../../container/useLikePhoto";
import { Link } from "@reach/router";

export default function PhotoCard({ id, likes = 0, liked, src }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

  const element = useRef(null);
  const [show, setShow] = useState(false);

  const [toggleLike] = useLikePhoto();

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];

        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(element.current);
    });
  }, [element]);

  const Image = src ? src : defaultImage;

  const handleFavButtonClick = () => {
    toggleLike({ variables: { input: { id: id } } });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="photoCard"></Img>
            </ImgWrapper>
          </Link>
          <FavButton
            liked={liked}
            likes={likes}
            onClick={handleFavButtonClick}
          />
        </>
      )}
    </Article>
  );
}
