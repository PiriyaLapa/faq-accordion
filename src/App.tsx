
import {Component} from 'react';
import { Container, Header } from './components/StyleComponents';
import { Card } from './components/CardComponent';
import VectorLine from './components/VectorComponent';
export default class App extends Component {
  render(){
    return(
      <Container>
        {/* <Header /> */}
        <Header>
          <VectorLine />
        </Header>
        <Card />
      </Container>
    )
  }
}