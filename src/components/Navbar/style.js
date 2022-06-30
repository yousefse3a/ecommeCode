import styled from "styled-components";
import {mobile} from '../../Responsive'
export const Container = styled.div`
    width: 100%;
`;
export const Swaper = styled.div({
    margin: " 1rem 0.5rem",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "baseline",
});
export const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    ${mobile({display:'none'})}
`;
export const Language = styled.p({
    cursor: "pointer",
});
export const SerachContianer = styled.div({
    border: "1px solid gray",
    margin: "0rem .5rem",
    display: "flex",
    alignItems: "center",
});
export const Input = styled.input({
    border: "none",
});
export const Center = styled.div({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    
});
export const Logo = styled.h1`
    display: inline-block;
    font-weight: bold;
    cursor: pointer;
    ${mobile({fontSize:'1.2rem'})};
`;
export const Right = styled.div({
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
});
export const MenuItem = styled.p({
    margin: "0 .5rem",
    cursor: "pointer",
});
