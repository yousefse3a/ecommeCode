import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { Logout } from "../../Redux/userSlice";
import {
  Center,
  Container,
  Language,
  Left,
  Logo,
  Right,
  SerachContianer,
  Swaper,
  Input,
  MenuItem,
} from "./style";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, updateUserCartApi } from "../../Redux/cartSlice";
export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const userToken = useSelector((state) => state.user.userToken);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  function handleLogOut() {
    dispatch(updateUserCartApi(userToken));
    dispatch(deleteCart());
    dispatch(Logout());
  }
  return (
    <Container>
      <Swaper>
        <Left>
          <Language>EN</Language>
          <SerachContianer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SerachContianer>
        </Left>
        <Center>
          <Logo>
            {" "}
            <Link to="/">E-Comm</Link>
          </Logo>
        </Center>
        <Right>
          {user ? (
            <>
              <MenuItem>hello {user.fullname.split(" ")[0]}</MenuItem>
              <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
            </>
          ) : (
            <>
              <Link to="/Register">
                <MenuItem>Register</MenuItem>
              </Link>
              <Link to="/Login">
                <MenuItem>Login</MenuItem>
              </Link>
            </>
          )}
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Swaper>
    </Container>
  );
}
