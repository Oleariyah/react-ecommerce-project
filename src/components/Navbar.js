import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class extends Component {
  render() {
    return (
      <NavWrapper>
        <div class="navbar navbar-expand-sm navbar-dark px-sm-5">
          <Link to="/" className="navbar-brand">
            SHOPMATE
          </Link>
          <ul className="navbar-nav align-item-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className=" ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i class="fa fa-shopping-cart" aria-hidden="true" />
                My Cart
              </span>
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--red-pink);
  .nav-link {
    color: var(--nav-white) !important;
    text-transform: capitalize !important;
  }
  .nav-link:hover {
    color: var(--white) !important;
  }
`;
