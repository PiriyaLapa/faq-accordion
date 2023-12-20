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

// const SVGButton = styled.svg`
//   cursor: pointer;
// `;

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
    /* const color1 = "M15 3.3125C12.5895 3.3125 10.2332 4.02728 8.22899 5.36646C6.22477 6.70564 4.66267 8.60907 3.74022 10.836C2.81778 13.063 2.57643 15.5135 3.04668 17.8777C3.51694 20.2418 4.67769 22.4134 6.38214 24.1179C8.08659 25.8223 10.2582 26.9831 12.6223 27.4533C14.9865 27.9236 17.437 27.6822 19.664 26.7598C21.8909 25.8373 23.7944 24.2752 25.1335 22.271C26.4727 20.2668 27.1875 17.9105 27.1875 15.5C27.1841 12.2687 25.899 9.17076 23.6141 6.8859C21.3292 4.60104 18.2313 3.31591 15 3.3125ZM19.6875 16.4375H10.3125C10.0639 16.4375 9.82541 16.3387 9.64959 16.1629C9.47378 15.9871 9.37501 15.7486 9.37501 15.5C9.37501 15.2514 9.47378 15.0129 9.64959 14.8371C9.82541 14.6613 10.0639 14.5625 10.3125 14.5625H19.6875C19.9361 14.5625 20.1746 14.6613 20.3504 14.8371C20.5262 15.0129 20.625 15.2514 20.625 15.5C20.625 15.7486 20.5262 15.9871 20.3504 16.1629C20.1746 16.3387 19.9361 16.4375 19.6875 16.4375Z"; */

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
              <AccordionHeader onClick={() => this.toggleAccordion(index)}>
                {item.question} 
                <ButtonCircle />
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

// export class TestCard extends Component<
//   AccordionProps,
//   { openIndex: number | null }
// > {
//   constructor(props: AccordionProps) {
//     super(props);
//     this.state = {
//       openIndex: null,
//     };
//   }

//   onClick = (index: number) => {
//     this.setState((previous) => ({
//       openIndex: previous.openIndex === index ? null : index,
//     }));
//     console.log(this.state);
//   };

//   render() {
//     const { items } = this.props;
//     const { openIndex } = this.state;
//     return (
//       <AccordionContainer>
//         <PanelContainer>
//           {items.map((item, index) => (
//             <AccordionItem key={index}>
//               <AccordionHeader>
//                 {item.question}
//                 {/* <ButtonCircle onClick={() => this.onClick(index)} /> */}
//                 <button type="submit" onClick={() => this.onClick(index)}>
//                   test
//                 </button>
//               </AccordionHeader>
//               <AccordionContent $isOpen={openIndex === index}>
//                 {item.answer}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </PanelContainer>
//       </AccordionContainer>
//     );
//   }
// }
