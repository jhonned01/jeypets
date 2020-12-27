import React from "react";
import { List, Item } from "./styles";
import Category from "../category/Category";
import { categories } from "../../dbDev/db.json";
export default function ListOfCategories() {
  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
}
