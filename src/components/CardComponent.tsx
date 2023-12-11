import {Component, ReactNode} from 'react';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 600px;
  height: 565px;
  position: top;
  background-color: white;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export class Card extends Component {
  render():ReactNode {
    return (
      <CardContainer>
        <h1>FAQ accodion</h1>
      </CardContainer>
    );
  }
}