import styled from "styled-components";
import { mobile } from "../../Responsive";
export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  ${mobile({
    flexFlow:'column',
    padding:'.5rem'
  })}
  
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
width: 90%;
height: 70vh;
object-fit:contain;
${mobile({
    width:'100%',
    height:'25vh'
  })}
`;
export const InfoContainer = styled.div`
  flex: 1;
  height: 100%;
  display:flex;
  flex-direction: column;
  > * {
      margin-bottom: 1rem;
  }
  
`;
export const Title = styled.h1`
  font-weight: 600;
`;
export const Desc = styled.p`
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
export const FilterContainer = styled.div`
  display: flex;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  `;
export const FilterTitle = styled.span`
 font-size: 20px;
  font-weight: 300;
  margin-right: 1rem;
`;
export const FilterColorOption = styled.div`
 width: 1rem;
 height: 1rem;
 border-radius: 50%;
 margin-right: .5rem;
 border: .5px solid black ;
 background-color:${props => props.bg};
`;
export const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`;
export const Option = styled.option`
`;
export const AddContainer = styled.div`
display: flex; 
`;
export const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  > *{
      margin-right:.3rem;
  }
`;
export const Amout = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid teal;
  border-radius: 5px;
  font-weight: 600;
  
`;
export const Btn = styled.div`
  padding: .8rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;
