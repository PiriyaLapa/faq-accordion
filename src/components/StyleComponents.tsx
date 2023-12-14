import styled from "styled-components";

export const Container = styled.div`
  /* width: 1440px; */
  width: 100%;
  height: 900px;
  background-color: #f8eeff;
  margin: 0 auto;

  :nth-child(2) {
    position: relative;
    top: -20%;
  }
`;
export const Header = styled(Container)`
  height: 320px;
  background-color: #301534;

  *{
    margin:0 auto;
    position:absolute

  }
`;

export const SmallSize= styled.span`
  font-size:.6em;
`