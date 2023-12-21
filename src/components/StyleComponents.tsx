import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 900px;
  margin: 0 auto;
  background-color: #f8eeff;
  @media only screen and (min-width: 376px) {
    background-color: #f8eeff;
  }
`;
export const Header = styled(Container)`
  height: 320px;
  background-color: #301534;

  * {
    margin: 0 auto;
    width:100%;
  }

  
`;
