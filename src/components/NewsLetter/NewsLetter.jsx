import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Contianer = styled.div`
  width: 100%;
  height: 60vh;
  background-color: beige;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  box-sizing: border-box;
`;
const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({fontSize:'50px'})};

`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  ${mobile({fontSize:'18px'})};

`;
const InputContainer = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  border: 1px solid black;
  background-color: white;
`;
const Input = styled.input`
  flex: 8;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  border: none;
  :focus{
    outline: none;
  }
`;
const Btn = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: teal;
  border: none;
`;

export default function NewsLetter() {
  return (
    <Contianer>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Btn>
          <Send />
        </Btn>
      </InputContainer>
    </Contianer>
  );
}
