import React, { useState, useEffect } from "react";
import { List, Item } from "./styles";
import Category from "../category/Category";
import NProgress from "nprogress";

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const categoriesData = async () => {
      try {
        NProgress.start();
        setLoading(true);
        let res = await fetch(
          "https://petgram-server-edsf8xpy2.now.sh/categories"
        );

        let data = await res.json();

        setCategories(data);
        NProgress.done();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    categoriesData();
  }, []);

  return { categories, loading, error };
};

export default function ListOfCategories() {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading, error } = useCategoriesData();
  console.log(loading);
  console.log(error);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;

      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
  // if (loading) {
  //   return <div>loadding...</div>;
  // }
  return (
    <>
      {renderList()} {showFixed && renderList(true)}
    </>
  );
}
