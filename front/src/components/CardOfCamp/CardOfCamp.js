import React, {Component} from 'react';

import './CardOfCamp.css'

class CardOfCamp extends Component {
  render() {
    return (
      <div className="Card">
        <img className="Image" src={this.props.image} alt="Card of camp"/>
        <div className="CardText">
          <p className="Title">{this.props.title}</p>
          <p className="Price"> $ {this.props.price}</p>
        </div>
      </div>
    );
  }
}

export default CardOfCamp;