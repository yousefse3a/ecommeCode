import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../Redux/userSlice";
import {
  Btn,
  Container,
  ErrMess,
  Form,
  Input,
  Link,
  Title,
  Warper,
} from "./Style";

export default function Login() {
  const [userEmail, setuserEmail] = useState(null);
  const [userPass, setuserPass] = useState(null);
  const {  loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handleLogin(e) {
    e.preventDefault();
    dispatch(userAuth({ email: userEmail, pass: userPass }));
  }

  
  return (
    <Container
      bgImg={
        "https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    >
      <Warper>
        <Title>SIGN IN</Title>
        <Form flexDer={"column"}>
          <Input
            placeholder="username"
            onChange={(e) => {
              setuserEmail(e.target.value);
            }}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => {
              setuserPass(e.target.value);
            }}
          />
          <ErrMess>{error}</ErrMess>
          <Btn
            onClick={(e) => {
              handleLogin(e);
            }}
            disabled={loading}
          >
            LOGIN
          </Btn>

          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Warper>
    </Container>
  );
}
