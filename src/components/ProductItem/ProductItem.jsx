import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { mobile } from "../../Responsive";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Redux/api";
const IconLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.2) content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  opacity: 0;
  transition: all 0.5s ease-in-out;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Container = styled.div`
  flex: 1;
  min-width: 25%;
  max-height: 350px;
  background-color: #f5fbfd;
  background-clip: content-box;
  padding: 0.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  :hover ${IconLayer} {
    opacity: 1;
  }
  ${mobile({ width: "100%" })};
`;
const Img = styled.img`
  width: 50%;
  object-fit: contain;
  z-index: 2;
  max-height:300px ;
  mix-blend-mode: multiply;
`;

export default function ProductItem({ pro }) {
  return (
    <Container>
      <Img src={`${baseUrl}${pro.img}`} />
      <IconLayer>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${pro._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </IconLayer>
    </Container>
  );
}
