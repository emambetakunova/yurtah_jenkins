import React from 'react';
import {NavLink} from 'react-router-dom'
import Container from "../Container/Container";

import './Header.css';

const Header = () => {
  return (
    <div className="NavBar">
      <Container>
        <p className="Logo"/>
        <NavLink className="Menu" to="/">Home</NavLink>
        <NavLink className="Menu" to="/about">About</NavLink>
      </Container>
    </div>

  )
};

export default Header;