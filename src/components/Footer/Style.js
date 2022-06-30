import styled from "styled-components";
import { mobile } from "../../Responsive";
export const Contianer = styled.div`
display: flex;
justify-content: space-between;
padding: .5rem;
box-sizing: border-box;
${mobile({flexFlow:'column'})};
`;
export const Left = styled.div`
flex:1;
padding-right:4rem ;  
 box-sizing: border-box; 
 ${mobile({padding:'.5rem 0'})};

`;
export const Title = styled.h2`
`;
export const Desc = styled.p`
margin:.5rem 0rem;
`;
export const SocialIcons = styled.div`
display: flex;
justify-content: flex-start;
`;
export const Icon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
margin:.5rem .5rem .5rem 0;
background-color: #${props => props.bg};
color:white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;
export const Center = styled.div`
flex:1;
padding-right:4rem ; 
box-sizing: border-box;
${mobile({padding:'.5rem 0'})};

`;
export const List = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: .5rem 0 0 0;

`;
export const ItemList = styled.li`
width: 50%;
padding:0 0 .5rem 0;
cursor: pointer;
`;
export const Right = styled.div`
flex:1;
${mobile({display:'none'})};
`;
export const ContactItem = styled.div`
display: flex;
justify-content: flex-start;
align-items: baseline;
margin-top: .5rem;
> svg{
   font-size:1rem;
   margin-right: .5rem;
}
`;
export const Payment = styled.img`
margin-top: .5rem;
`;
