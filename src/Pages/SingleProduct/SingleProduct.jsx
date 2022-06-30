import { Add, Remove } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../Redux/api";
import { addProduct } from "../../Redux/cartSlice";
import {
  AddContainer,
  AmountContainer,
  Amout,
  Btn,
  Container,
  Desc,
  Filter,
  FilterContainer,
  FilterTitle,
  Image,
  ImgContainer,
  InfoContainer,
  Option,
  Price,
  Title,
  Select,
  FilterColorOption,
} from "./Style";
export default function SingleProduct() {
  let loc = useLocation();
  let ProductId = loc.pathname.split("/")[2];
  const [Product, setProduct] = useState({});
  const [Amount, setAmount] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();

  function handleAmount(type) {
    if (type === "add") {
      setAmount(Amount + 1);
    } else {
      Amount > 0 && setAmount(Amount - 1);
    }
  }
  function handleCart() {
    if (size == null || color == null) {
      dispatch(addProduct({ _id: { ...Product }, Amount }));
    } else {
      dispatch(addProduct({ _id: { ...Product, size, color }, Amount }));
    }
  }
  const getProduct = async () => {
    let { data } = await axios.get(
      `${baseUrl}/Product/${ProductId}`
    );
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, [ProductId]);

  return (
    <>
      <Container>
        <ImgContainer>
          <Image src={`${baseUrl}${Product.img}`} />
        </ImgContainer>
        <InfoContainer>
          <Title>{Product.title}</Title>
          <Desc>{Product.desc}</Desc>
          <Price>{`$ ${Product.price}`}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {Product.color &&
                Product.color.map((color) => {
                  return (
                    <FilterColorOption
                      bg={color}
                      onClick={() => {
                        setColor(color);
                      }}
                      key={color}
                    />
                  );
                })}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Select
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                {Product.size &&
                  Product.size.map((size) => {
                    return <Option key={size}>{size}</Option>;
                  })}
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => {
                  handleAmount("remove");
                }}
              />
              <Amout>{Amount}</Amout>
              <Add
                name="add"
                onClick={(e) => {
                  handleAmount("add");
                }}
              />
            </AmountContainer>
            <Btn onClick={handleCart}>Add To Cart</Btn>
          </AddContainer>
        </InfoContainer>
      </Container>
    </>
  );
}
