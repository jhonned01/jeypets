import React, { useRef, useEffect, useState, Fragment } from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import FavButton from "../favButton/FavButton";
import { useLikePhoto } from "../../container/useLikePhoto";

export default function PhotoCard({ id, likes = 0, src }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

  const element = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like-${id}`;

  const [toggleLike] = useLikePhoto();
  const [liked, setLiked] = useLocalStorage(key, false);

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
    console.log(`id de la photo ${id}`);
    setLiked(!liked);
    toggleLike({ variables: { input: { id: id } } });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt="photoCard"></Img>
            </ImgWrapper>
          </a>
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
