import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_add_shopping_cart } from "react-icons-kit/md/ic_add_shopping_cart";
import PropTypes from "prop-types";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, img, inCart, price, title } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product_image" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {""}
                      in cart
                    </p>
                  ) : (
                    <Icon size={20} icon={ic_add_shopping_cart} />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/*card footer*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    transition: all 0.2s ease-in-out;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    object-fit: cover;
  }
  .card:hover {
    box-shadow: 5px 10px 18px #888888;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--red-pink);
    color: var(--white);
    border: none;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.2s linear;
  }
  .img-container: hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    cursor: pointer;
  }
`;
