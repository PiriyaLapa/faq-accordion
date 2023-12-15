import styled, { createGlobalStyle } from "styled-components";
import { ReactNode } from "react";

// const GlobalStyles = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&family=Poppins&family=Roboto:wght@500&family=Ubuntu&family=Work+Sans:wght@700&display=swap');
// `;

interface StyleComponentProps {
  children: ReactNode;
}

export const WorkSans = createStyleComponent("div", "Work Sans", 700);
function createStyleComponent(
  elementType: string,
  fontFamily: string,
  fontWeight: number
) {
  return styled(elementType)<StyleComponentProps>`
    font-family: ${fontFamily}, sans-serif;
    font-weight: ${fontWeight || "normal"};
    display: inline-block;
    padding: 5px;
    margin: 5px 0px;
  `;
}

export const Container = styled.div`
  width: 100%;
  height: 900px;
  margin: 0 auto;
`;
export const Header = styled(Container)`
  height: 320px;
  background-color: #301534;

  * {
    margin: 0 auto;
    position: absolute;
  }
`;

// export const SmallSize = styled.span`
//   font-size: 0.6em;
//   display:inline-block;
//   position:absolute;
//   top:-23px;
//   left:180px
// `;
