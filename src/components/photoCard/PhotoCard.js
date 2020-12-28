import React, { useRef, useEffect, useState, Fragment } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

export default function PhotoCard({ id, likes = 0, src }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];

        if (isIntersecting) {
          console.log("si");
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(element.current);
    });
  }, [element]);

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={defaultImage} alt="photoCard"></Img>
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" />
            {likes}
          </Button>
        </>
      )}
    </Article>
  );
}
