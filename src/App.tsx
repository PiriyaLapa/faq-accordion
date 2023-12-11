
import {Component} from 'react';
import { Container, Header } from './components/StyleComponents';
import { AccordionCard } from './components/AccordionCard';
import VectorLine from './components/VectorComponent';
export default class App extends Component {
  render(){
    return(
      <Container>
        {/* <Header /> */}
        <Header>
          <VectorLine />
        </Header>
        <AccordionCard />
      </Container>
    )
  }
}