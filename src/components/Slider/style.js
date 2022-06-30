import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
    width: 100%;
    height:calc(100vh - 60px);
    display: flex;
    background-color: red;
    position: relative;
    overflow: Hidden;
    ${mobile({ display: 'none' })}
`;
export const Warper = styled.div`
    height: 100%;
    display: flex;   
    transition :all ease-in-out 1s ;
    transform: translateX(${props => props.sliderIndex * -100}vw); 
`;
export const SiderItem = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    background-color: ${(props) => props.bg};
  `;
export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
export const SliderImg = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;
export const SliderInfo = styled.div`
  flex: 1;
  padding: 50px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  `;
export const ShopBtn = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  `;
export const Title = styled.h2`
  font-size: 5rem;
  `;
export const Desc = styled.p`
 margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  `;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  `;
