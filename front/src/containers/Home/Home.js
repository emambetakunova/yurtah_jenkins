import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "../../components/Header/Header";
import Promo from "../../components/Promo/Promo";
import CardOfCamp from "../../components/CardOfCamp/CardOfCamp";
import ListingsForm from "../../components/ListingsForm/ListingsForm";
import Container from "../../components/Container/Container";

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Promo>
          <ListingsForm/>
        </Promo>
        <Container>
          <div className="CardOfCamp">
            {this.props.listings.map((camp) => (
              <CardOfCamp
                key={camp.id}
                image={camp.objects[4].data.small.jpeg}
                title={camp.slug}
                price={camp.price}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listings: state.listings
});

export default connect(mapStateToProps, null)(Home);