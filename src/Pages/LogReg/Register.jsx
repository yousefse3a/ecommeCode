import React, { useEffect, useState } from "react";
import {
  Btn,
  Container,
  Form,
  Input,
  Agreement,
  Title,
  Warper,
  ErrMess,
  InputDiv,
} from "./Style";
import Joi from "joi";
import axios from "axios";
import { baseUrl } from "../../Redux/api";
import { useDispatch } from "react-redux";
import { userAuth } from "../../Redux/userSlice";

export default function Register() {
  const dispatch = useDispatch();
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    fullname: "",
    cPassword: "",
  });
  const schema = Joi.object({
    username: Joi.string()
      .pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/))
      .label("user name")
      .required()
      .messages({
        "string.empty": "plz fill in u name",
        "any.required": "plz send  u name",
        "string.pattern.base": "plz enter valid name char",
      }),
    fullname: Joi.string()
      .required()
      .label("full name")
      .messages({ "string.empty": "plz fill in u full name" }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("email")
      .messages({ "string.empty": "plz fill in u email" }),
    password: Joi.string()
      .required()
      .label("password")
      .messages({ "string.empty": "plz fill in u pass" }),
    cPassword: Joi.string()
      .valid(Joi.ref("password"))
      .messages({ "any.only" : "Password must match" })
      .required().label('password'),
    address: Joi.string().allow("").optional(),
  });
  function handleChange(e) {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  function check(e) {
    e.preventDefault();
    for (const key in Inputs) {
      document.getElementById(key).innerText = " ";
      document.getElementsByName(key)[0].style.borderColor = "black";
    }
    let { error } = schema.validate(Inputs, { abortEarly: false });
    if (!error) {
      create(Inputs);
    } else {
      error.details.map((detail) => {
        console.log(detail.path[0], ":", detail.message);
        document.getElementById(detail.path[0]).innerText = detail.message;
        document.getElementsByName(detail.path[0])[0].style.borderColor = "red";
      });
    }
  }

  async function create(Inputs) {
    console.log(Inputs);
    let { data } = await axios.post(`${baseUrl}/signup`, {
      ...Inputs,
      gender: "not yet",
    });
    if (data.message === "email exist") {
      document.getElementById("email").innerText = data.message;
      document.getElementsByName("email")[0].style.borderColor = "red";
    }
    if(data.token){
      dispatch(userAuth({ email: Inputs.email, pass: Inputs.password }));
    }
  }

  return (
    <Container
      bgImg={
        "https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    >
      <Warper>
        <Title>SIGN IN</Title>
        <Form flexDer={"row"}>
          <InputDiv>
            <Input
              name="fullname"
              placeholder="name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <ErrMess id="fullname"></ErrMess>
          </InputDiv>

          <InputDiv>
            <Input
              name="username"
              placeholder="username"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <ErrMess id="username"></ErrMess>
          </InputDiv>
          <InputDiv>
            <Input
              name="email"
              placeholder="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <ErrMess id="email"></ErrMess>
          </InputDiv>
          <InputDiv>
            <Input
              name="address"
              placeholder="address"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <ErrMess id="address"></ErrMess>
          </InputDiv>
          <InputDiv>
            <Input
              name="password"
              placeholder="password"
              type="password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <ErrMess id="password"></ErrMess>
          </InputDiv>
          <InputDiv>
            <Input
              name="cPassword"
              placeholder="confirm password"
              type="password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <ErrMess id="cPassword"></ErrMess>
          </InputDiv>

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Btn onClick={check}>CREATE</Btn>
        </Form>
      </Warper>
    </Container>
  );
}
