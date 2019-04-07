import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SecondaryButton } from "./Button";
import { ProductConsumer } from "../context";

export default class extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price : $ {price}</h5>

                      <Link to="/">
                        <SecondaryButton onClick={() => closeModal()}>
                          store
                        </SecondaryButton>
                      </Link>
                      <Link to="/cart">
                        <SecondaryButton new onClick={() => closeModal()}>
                          go to cart
                        </SecondaryButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-item: center;
  background: rgba(0, 0, 0, 0.3);
  #modal {
    background: var(--white);
  }
`;
