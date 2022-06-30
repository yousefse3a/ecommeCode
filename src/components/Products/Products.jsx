import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { baseUrl } from "../../Redux/api";
import { mobile } from "../../Responsive";
import ProductItem from "../ProductItem/ProductItem";
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
  ${mobile({ flexFlow: "column" })};
`;

export default function Products({ Category, Filters, Sort }) {
  const [Products, setProducts] = useState([]);
  const [FilterProducts, setFilterProducts] = useState([]);
  const getProducts = async () => {
    let { data } = await axios.get(
      Category
        ? `${baseUrl}/Products?category=${Category}`
        : `${baseUrl}/Products`
    );
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    Category &&
      setFilterProducts(
        Products.filter((pro) => {
          return Object.entries(Filters).every(([key, value]) => {
            return pro[key].includes(value);
          });
        })
      );
  }, [Products, Category, Filters]);
  useEffect(() => {
    if (Sort === "newest") {
      setFilterProducts((prevState) =>
        [...prevState].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (Sort === "asc") {
      setFilterProducts((prevState) =>
        [...prevState].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilterProducts((prevState) =>
        [...prevState].sort((a, b) => b.price - a.price)
      );
    }
  }, [Sort]);

  return (
    <div>
      <Container>
        {Category
          ? FilterProducts.map((pro) => {
              return <ProductItem pro={pro} key={pro._id}></ProductItem>;
            })
          : 
          Products.slice(0,8).map((pro) => {
              return <ProductItem pro={pro} key={pro._id}></ProductItem>;
            })}
      </Container>
    </div>
  );
}
