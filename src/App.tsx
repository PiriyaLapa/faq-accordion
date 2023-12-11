
import {Component} from 'react';
import { Container, Header } from './components/StyleComponents';
import { AccordionCard } from './components/AccordionCard';
import VectorLine from './components/VectorComponent';
import { FAQdata } from './data/FAQData';

export default class App extends Component {
  render(){
    return(
      <Container>
        <Header>
          <VectorLine />
        </Header>
        <AccordionCard items={FAQdata}/>
      </Container>
    )
  }
}