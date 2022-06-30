import { css } from "styled-components";

export const mobile = (props) => {
    return css`
      @media only screen and (max-width: 420px) {
        ${props}
      }
    `;
  };
export const tablet = (props) => {
    return css`
      @media only screen and (max-width: 1080px) {
        ${props}
      }
    `;
  };