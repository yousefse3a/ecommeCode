import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {
  AmountContainer,
  Amout,
  Bottom,
  Btn,
  ColorIcon,
  Container,
  Detail,
  Heading,
  Img,
  Info,
  Price,
  ProAmount,
  ProDetails,
  Product,
  ProImg,
  SumItem,
  SumItemPrice,
  SumItemText,
  Summary,
  SumTitle,
  Top,
  TopText,
  TopTexts,
} from "./Style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, updateUserCartApi } from "../../Redux/cartSlice";
import { baseUrl } from "../../Redux/api";
import { emptyUserCart } from "../../Redux/userSlice";

export default function Cart() {
  const userToken = useSelector((state) => state.user.userToken);
  const StripPublicKey =
    "pk_test_51L71X1HJIHJeJ6mD1k7bS7asLjS3N0BR0KXYa5jjFXFHDvY2YR0TtKZ9tSOsC5fpGsLqzbkqvVsLi7MtV6lc9YC400NYFMEUoX";
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);
  const subtotal = useSelector((state) => state.cart.total);
  const total = subtotal + 30 - ((subtotal + 30) % 6);
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  async function getPayment() {
    const payRes = await axios.post(`${baseUrl}/payment`, {
      tokenId: stripeToken.id,
      amount: total,
    });
    console.log(payRes);
    navigate("/success", {
      state: { stripeData: payRes.data, cart: products, total: total },
    });
  }
  useEffect(() => {
    stripeToken && getPayment();
  }, [stripeToken]);

  return (
    <>
      <Container>
        <Heading>YOUR BAG</Heading>
        <Top>
          <Btn type={"none"}>CONTINUE SHOPPING</Btn>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <Btn
            type={"filled"}
            onClick={() => {
              dispatch(emptyCart());
              dispatch(emptyUserCart());
              dispatch(updateUserCartApi(userToken));
            }}
          >
            Empty Cart
          </Btn>
        </Top>
        <Bottom>
          <Info>
            {products.map((pro, index) => {
              return (
                <Product key={index}>
                  <ProImg>
                    <Img src={`${baseUrl}${pro._id.img}`} />
                  </ProImg>
                  <ProDetails>
                    <Detail>
                      Product:<span>{pro._id.title}</span>
                    </Detail>
                    <Detail>
                      Id:<span>{pro._id._id}</span>
                    </Detail>
                    <Detail>
                      Color:<ColorIcon bg={pro._id.color}></ColorIcon>
                    </Detail>
                    <Detail>
                      Size: <span>{pro._id.size}</span>
                    </Detail>
                  </ProDetails>
                  <ProAmount>
                    <AmountContainer>
                      <Remove />
                      <Amout>{pro.Amount}</Amout>
                      <Add />
                    </AmountContainer>
                    <Price>$ {pro.Amount * pro._id.price}</Price>
                  </ProAmount>
                </Product>
              );
            })}
          </Info>
          <Summary>
            <SumTitle>ORDER SUMMARY</SumTitle>
            <SumItem>
              <SumItemText>Subtotal</SumItemText>
              <SumItemPrice>$ {subtotal}</SumItemPrice>
            </SumItem>
            <SumItem>
              <SumItemText>Estimated Shipping</SumItemText>
              <SumItemPrice>$ {subtotal ? 30 : 0}</SumItemPrice>
            </SumItem>
            <SumItem>
              <SumItemText>Shipping Discount</SumItemText>
              <SumItemPrice>% {subtotal ? 6 : 0}</SumItemPrice>
            </SumItem>
            <SumItem type={"total"}>
              <SumItemText>Total</SumItemText>
              <SumItemPrice>$ {subtotal ? total : 0}</SumItemPrice>
            </SumItem>
            {userToken ? (
              <StripeCheckout
                ComponentClass="div"
                billingAddress
                shippingAddress
                stripeKey={StripPublicKey}
                token={onToken}
              >
                <Btn type="filled">CHECKOUT NOW</Btn>
              </StripeCheckout>
            ) : (
              <Link to="/Login">
                <Btn type={"filled"}>Login to checkOut</Btn>
              </Link>
            )}
          </Summary>
        </Bottom>
      </Container>
    </>
  );
}
