
import {Component} from 'react';
import { Container, Header } from './components/StyleComponents';
import { AccordionCard, TestCard } from './components/AccordionCard';
import VectorLine from './components/VectorComponent';
import { faqData} from './data/FAQData';

export default class App extends Component {
  render(){
    return(
      <Container>
        <Header>
          <VectorLine />
        </Header>
        <AccordionCard items={faqData}/>
        {/* <TestCard items={faqData} /> */}
      </Container>
    )
  }
}