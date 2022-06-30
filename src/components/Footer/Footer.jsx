import React from "react";
import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import {
  Icon,
  Center,
  Contianer,
  Desc,
  Left,
  Right,
  SocialIcons,
  Title,
  ItemList,
  List,
  Payment,
  ContactItem,
} from "./Style";
export default function Footer() {
  return (
    <Contianer>
      <Left>
        <Title>SE3A.</Title>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialIcons>
          <Icon bg={"3B5999"}>
            <Facebook />
          </Icon>
          <Icon bg={"E4405F"}>
            <Instagram />
          </Icon>
          <Icon bg={"55ACEE"}>
            <Twitter />
          </Icon>
          <Icon bg={"000000"}>
            <GitHub />
          </Icon>
        </SocialIcons>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ItemList>Home</ItemList>
          <ItemList>Cart</ItemList>
          <ItemList>Man Fashion</ItemList>
          <ItemList>Woman Fashion</ItemList>
          <ItemList>Accessories</ItemList>
          <ItemList>My Account</ItemList>
          <ItemList>Order Tracking</ItemList>
          <ItemList>Wishlist</ItemList>
          <ItemList>Wishlist</ItemList>
          <ItemList>Terms</ItemList>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> cairo ,egypt
        </ContactItem>
        <ContactItem>
          <Phone /> 01277167419
        </ContactItem>
        <ContactItem>
          <MailOutline /> ym6969247@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Contianer>
  );
}
