import React from "react";
import styled from "styled-components";
import CategoryItem from "../CategoryItem/CategoryItem";
import { categories } from "../../Data";
import { mobile } from "../../Responsive";

const Contianer = styled.div`
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  width: 100%;
  ${mobile({ flexFlow: "column" })};
`;

export default function Categories() {
  return (
    <Contianer>
      {categories.map((category) => {
        return <CategoryItem item={category} key={category.id}></CategoryItem>;
      })}
    </Contianer>
  );
}
