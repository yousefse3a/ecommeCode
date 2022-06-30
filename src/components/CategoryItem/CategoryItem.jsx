import React from "react";
import {  Link } from "react-router-dom";
import styled from "styled-components";
const Contianer = styled.div`
  flex: 1;
  min-width: 33.3333%;
  padding: 0.5rem;
  box-sizing: border-box;
  height: 70vh;
  position: relative;
`;
const Info = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Tittle = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Btn = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

export default function CategoryItem({ item }) {
  return (
    <Contianer>
      <Img src={item.img} />
      <Info>
        <Tittle>{item.title}</Tittle>
        <Btn><Link to={`/products/${item.cat}`}>shop Now</Link></Btn>
      </Info>
    </Contianer>
  );
}
