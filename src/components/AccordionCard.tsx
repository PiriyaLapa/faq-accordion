import { Component, ReactNode } from "react";
import styled from "styled-components";
import { FAQItem } from "../data/FAQData";
import VectorHeader from "./VectorHeader";
import ButtonCircle from "./ButtonCircle";

export const AccordionContainer = styled.div`
  width: 600px;
  /* height: 565px; */
  height: auto;
  margin: 0 auto;
  position: relative;
  top: -160px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const AccordionItem = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 8px;
`;

const AccordionHeader = styled.div`
  color: #301534;
  padding: 11px;
  background-color: #f1f1f1;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;
const AccordionContent = styled.div<{ $isOpen: boolean }>`
  padding: 10px;
  display: ${({ $isOpen }: { $isOpen: boolean }) =>
    $isOpen ? "block" : "none"};
  color: #8b6990;
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
    margin: 0px;
    display: inline-block;
  }
`;

const PanelHeader = styled.div`
  color: #301534;
  :nth-child(1) {
    margin: 5px 25px 5px 15px;
    font-size: 2rem;
  }

  span {
    position: relative;
    left: -10%;
  }
`;

const SVGButton= styled.svg`
  cursor:pointer;
`

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
    console.log(this.state);
  };

  render(): ReactNode {
    const { items } = this.props;
    const { openIndex } = this.state;
    // const color1 = "M15 3.3125C12.5895 3.3125 10.2332 4.02728 8.22899 5.36646C6.22477 6.70564 4.66267 8.60907 3.74022 10.836C2.81778 13.063 2.57643 15.5135 3.04668 17.8777C3.51694 20.2418 4.67769 22.4134 6.38214 24.1179C8.08659 25.8223 10.2582 26.9831 12.6223 27.4533C14.9865 27.9236 17.437 27.6822 19.664 26.7598C21.8909 25.8373 23.7944 24.2752 25.1335 22.271C26.4727 20.2668 27.1875 17.9105 27.1875 15.5C27.1841 12.2687 25.899 9.17076 23.6141 6.8859C21.3292 4.60104 18.2313 3.31591 15 3.3125ZM19.6875 16.4375H10.3125C10.0639 16.4375 9.82541 16.3387 9.64959 16.1629C9.47378 15.9871 9.37501 15.7486 9.37501 15.5C9.37501 15.2514 9.47378 15.0129 9.64959 14.8371C9.82541 14.6613 10.0639 14.5625 10.3125 14.5625H19.6875C19.9361 14.5625 20.1746 14.6613 20.3504 14.8371C20.5262 15.0129 20.625 15.2514 20.625 15.5C20.625 15.7486 20.5262 15.9871 20.3504 16.1629C20.1746 16.3387 19.9361 16.4375 19.6875 16.4375Z";
    // const color2 ="M13 0.3125C10.5895 0.3125 8.23322 1.02728 6.22899 2.36646C4.22477 3.70564 2.66267 5.60907 1.74022 7.83604C0.817781 10.063 0.576428 12.5135 1.04668 14.8777C1.51694 17.2418 2.67769 19.4134 4.38214 21.1179C6.08659 22.8223 8.2582 23.9831 10.6223 24.4533C12.9865 24.9236 15.437 24.6822 17.664 23.7598C19.8909 22.8373 21.7944 21.2752 23.1335 19.271C24.4727 17.2668 25.1875 14.9105 25.1875 12.5C25.1835 9.26891 23.8981 6.17131 21.6134 3.88659C19.3287 1.60186 16.2311 0.316531 13 0.3125ZM17.6875 13.4375H13.9375V17.1875C13.9375 17.4361 13.8387 17.6746 13.6629 17.8504C13.4871 18.0262 13.2486 18.125 13 18.125C12.7514 18.125 12.5129 18.0262 12.3371 17.8504C12.1613 17.6746 12.0625 17.4361 12.0625 17.1875V13.4375H8.3125C8.06386 13.4375 7.82541 13.3387 7.64959 13.1629C7.47378 12.9871 7.375 12.7486 7.375 12.5C7.375 12.2514 7.47378 12.0129 7.64959 11.8371C7.82541 11.6613 8.06386 11.5625 8.3125 11.5625H12.0625V7.8125C12.0625 7.56386 12.1613 7.3254 12.3371 7.14959C12.5129 6.97377 12.7514 6.875 13 6.875C13.2486 6.875 13.4871 6.97377 13.6629 7.14959C13.8387 7.3254 13.9375 7.56386 13.9375 7.8125V11.5625H17.6875C17.9361 11.5625 18.1746 11.6613 18.3504 11.8371C18.5262 12.0129 18.625 12.2514 18.625 12.5C18.625 12.7486 18.5262 12.9871 18.3504 13.1629C18.1746 13.3387 17.9361 13.4375 17.6875 13.4375Z";
    
    
    return (
      <AccordionContainer>
        <PanelContainer>
          <PanelHeader>
            <VectorHeader />
            <h1>
              faq<span>s</span>
            </h1>
          </PanelHeader>
          {items.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader>
                {item.question}
                 <SVGButton
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => this.toggleAccordion(index)}
                >
                  <path
                    d="M13 0.3125C10.5895 0.3125 8.23322 1.02728 6.22899 2.36646C4.22477 3.70564 2.66267 5.60907 1.74022 7.83604C0.817781 10.063 0.576428 12.5135 1.04668 14.8777C1.51694 17.2418 2.67769 19.4134 4.38214 21.1179C6.08659 22.8223 8.2582 23.9831 10.6223 24.4533C12.9865 24.9236 15.437 24.6822 17.664 23.7598C19.8909 22.8373 21.7944 21.2752 23.1335 19.271C24.4727 17.2668 25.1875 14.9105 25.1875 12.5C25.1835 9.26891 23.8981 6.17131 21.6134 3.88659C19.3287 1.60186 16.2311 0.316531 13 0.3125ZM17.6875 13.4375H13.9375V17.1875C13.9375 17.4361 13.8387 17.6746 13.6629 17.8504C13.4871 18.0262 13.2486 18.125 13 18.125C12.7514 18.125 12.5129 18.0262 12.3371 17.8504C12.1613 17.6746 12.0625 17.4361 12.0625 17.1875V13.4375H8.3125C8.06386 13.4375 7.82541 13.3387 7.64959 13.1629C7.47378 12.9871 7.375 12.7486 7.375 12.5C7.375 12.2514 7.47378 12.0129 7.64959 11.8371C7.82541 11.6613 8.06386 11.5625 8.3125 11.5625H12.0625V7.8125C12.0625 7.56386 12.1613 7.3254 12.3371 7.14959C12.5129 6.97377 12.7514 6.875 13 6.875C13.2486 6.875 13.4871 6.97377 13.6629 7.14959C13.8387 7.3254 13.9375 7.56386 13.9375 7.8125V11.5625H17.6875C17.9361 11.5625 18.1746 11.6613 18.3504 11.8371C18.5262 12.0129 18.625 12.2514 18.625 12.5C18.625 12.7486 18.5262 12.9871 18.3504 13.1629C18.1746 13.3387 17.9361 13.4375 17.6875 13.4375Z"
                    // d={openIndex === index ? color1 : color2}
                    fill={openIndex === index ? "#301534" : "#AD28EB"}
                  />
                </SVGButton>
              </AccordionHeader>
              <AccordionContent $isOpen={openIndex === index}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </PanelContainer>
      </AccordionContainer>
    );
  }
}

export class TestCard extends Component<
  AccordionProps,
  { openIndex: number | null }
> {
  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      openIndex: null,
    };
  }

  onClick = (index: number) => {
    this.setState((previous) => ({
      openIndex: previous.openIndex === index ? null : index,
    }));
    console.log(this.state);
  };

  render() {
    const { items } = this.props;
    const { openIndex } = this.state;
    return (
      <AccordionContainer>
        <PanelContainer>
          {items.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionHeader>
                {item.question}
                {/* <ButtonCircle onClick={() => this.onClick(index)} /> */}
                <button type="submit" onClick={() => this.onClick(index)}>test</button>
              </AccordionHeader>
              <AccordionContent $isOpen={openIndex === index}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </PanelContainer>
      </AccordionContainer>
    );
  }
}
