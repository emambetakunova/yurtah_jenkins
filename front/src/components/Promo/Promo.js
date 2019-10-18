import React from 'react';
import Container from "../Container/Container";

import './Promo.css';

const Promo = ({children}) => {
  return (
    <div className="Promo">
      <Container>
        <p className="PromoText">Best ever camp for your child</p>
        {children}
      </Container>
    </div>
  )
};

export default Promo;