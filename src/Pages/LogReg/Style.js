import styled from "styled-components";
import { mobile } from "../../Responsive";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${props => props.bgImg})
      center;
  background-size: cover;
`;
export const Warper = styled.div`
  width: 30%;
  padding: 1.5rem;
  background-color: white;
  ${mobile({
  width: '100%',
  padding: '.5rem'
})}
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-flow: ${props => props.flexDer} wrap ;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  max-height: 16px;
  margin: 10px 10px 10px 0;
  padding: 10px;
`;

export const Btn = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
export const Agreement = styled.span`
   font-size: 12px;
  margin: 20px 0px;
`;
export const ErrMess = styled.span`
   font-size: .9rem;
   padding: 0;
  margin: 2px 0px;
  color: red;
`;
export const InputDiv = styled.div`
 display: flex;
 flex-flow: column nowrap;
`;