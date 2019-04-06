import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_add_shopping_cart } from "react-icons-kit/md/ic_add_shopping_cart";
import { PrimaryButton } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper>
        <div className="navbar navbar-expand-sm navbar-dark px-sm-5">
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
            <PrimaryButton>
              <span className="mr-2">
                <Icon size={32} icon={ic_add_shopping_cart} />
                My Cart
              </span>
            </PrimaryButton>
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
