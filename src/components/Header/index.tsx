import React from 'react';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

Header.protoTypes = {};

function Header() {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <NavLink to="/home">Reactjs App</NavLink>
      </h5>
      <Nav className="my-2 my-md-0 mr-md-3">
        <NavLink to="/product" activeStyle={{ fontWeight: "bold", color: "red" }} className="p-2 text-dark">Product</NavLink>
      </Nav>
      <NavLink to="/cart" className="btn btn-outline-primary" href="!#">Cart</NavLink>
    </header>
  )
}
export default Header;