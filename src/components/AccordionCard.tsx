import { Component, ReactNode } from "react";
import styled from "styled-components";
import { FAQItem } from "../data/FAQData";

export const AccordionContainer = styled.div`
  width: 600px;
  height: 565px;
  position: top;
  background-color: white;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

  toglegerAccordion = (index: number) => {
    this.setState((prevState) => ({
      openIndex: prevState.openIndex === index ? null : index,
    }));
  };

  render(): ReactNode {
    const { items } = this.props;
    const { openIndex } = this.state;
    return (
      <AccordionContainer>
        <h1>FAQ Container</h1>
        <p>we are doing....</p>
        {/* {items.map((item, index) => {
          <AccordionItem key={index}>
            <AccordionHeader>{item.question}</AccordionHeader>
            <AccordionContent isOpen={openIndex === index}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>;
        })} */}
      </AccordionContainer>
    );
  }
}
