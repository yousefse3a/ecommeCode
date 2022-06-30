import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
width: 100%;
display: flex;
flex-flow: column wrap;
padding: 1rem;
box-sizing: border-box;
${mobile({
  padding:'.5rem'
})}
`;
export const Heading = styled.h1`
font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Btn = styled.button`
padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
export const TopTexts = styled.div`
`;
export const TopText = styled.span`
margin:0 .5rem;
cursor: pointer;
${mobile({
  display:'none'
})}
`;
export const Bottom = styled.div`
display: flex;
margin-top:.5rem;
${mobile({
  flexFlow:'column'
})}
`;
export const Info = styled.div`
flex:3;
`;
export const Product = styled.div`
width: 100%;
height: 150px;
display:flex;
padding: .5rem 0;
border-bottom: 1px gray solid;
`;
export const ProImg = styled.div`
flex:1;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

`;
export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`;

export const ProDetails = styled.ul`
flex:1;
display: flex;
flex-flow: column;
list-style: none;
margin: 0;
padding: 0;

`;
export const Detail = styled.li`
flex:1;
display: flex;
font-weight: 700;
> *{
    font-weight: 300;
    margin-left: .5rem;
}
`;
export const ColorIcon = styled.div`
width: 1rem;
height: 1rem;
border-radius: 50%;
border: 1px solid black;
background-color: ${props => props.bg};
`;
export const ProAmount = styled.div`
flex:1;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
`;
export const AmountContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: .5rem;
  > *{
      margin-right:.3rem;
  }`;
export const Amout = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
width: 2rem;
height: 2rem;
border: 1px solid black;
border-radius: 5px;
font-weight: 600;

`;
export const Price = styled.span`
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: .5rem;

`;
export const Summary = styled.div`
flex:1;
padding: .5rem;
box-sizing: border-box;
border-radius: 10px;
border: 1px solid black;
height: 50vh;
display: flex;
flex-flow: column;
align-items: center;
justify-content: space-between;
`;
export const SumTitle = styled.h2`
`;
export const SumItem = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
export const SumItemText = styled.span`
`;
export const SumItemPrice = styled.span`
`;