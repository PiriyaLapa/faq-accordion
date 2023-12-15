import { Component, ReactNode } from "react";
import styled from "styled-components";
import { FAQItem } from "../data/FAQData";
import VectorHeader from "./VectorHeader";
import { SmallSize} from "./StyleComponents";
import {WorkSans}from './StyleComponents';

export const AccordionContainer = styled.div`
  width: 600px;
  height: 565px;
  position:absolute;
  top:60%;
  left:50%;
  transform:translate(-50%,-50%);

  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const AccordionItem = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 8px;
`;

const AccordionHeader = styled.div`
  padding: 13px;
  background-color: #f1f1f1;
  font-weight: bold;
  cursor: pointer;
`;
const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "block" : "none")};
`;

const PanelContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 15px;
  h1 {
    font-style: normal;
    text-transform: uppercase;
    font-size: 56px;
    font-weight: 700;
    line-height: 66px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin:0px;

    :nth-child(1) {
      margin:5px 25px 5px 15px;
    }
  }
`;

interface AccordionProps {
  items: FAQItem[];
}

export class AccordionCard extends Component<
  AccordionProps,
  { openIndex: number | null }
> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      openIndex: null,
    };
  }

  toggleAccordion = (index: number) => {
    this.setState((prevState) => ({
      openIndex: prevState.openIndex === index ? null : index,
    }));
  };

  render(): ReactNode {
    const { items } = this.props;
    const { openIndex } = this.state;
    return (
      <AccordionContainer>
        <PanelContainer>
          <h1>
            <VectorHeader />
            <WorkSans>faq<SmallSize>s</SmallSize></WorkSans>
          </h1>
          {items.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader onClick={() => this.toggleAccordion(index)}>
                {item.question}
              </AccordionHeader>
              <AccordionContent isOpen={openIndex === index}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </PanelContainer>
      </AccordionContainer>
    );
  }
}
