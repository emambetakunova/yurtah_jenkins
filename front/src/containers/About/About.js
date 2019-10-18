import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";

import Container from "../../components/Container/Container";
import AboutUsInfo from "../../components/AboutUsInfo/AboutUsInfo";

class About extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Promo/>
        <Container>
          <AboutUsInfo/>
        </Container>
      </div>
    );
  }
}

export default About;