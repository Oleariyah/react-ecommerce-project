import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { SecondaryButton } from "./Button";
import { Link } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            img,
            company,
            title,
            info,
            inCart,
            price
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto my-5 text-red text-center text-slanted">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end title*/}
              {/*product info*/}
              <div class="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-red">
                    <strong>
                      Price : $ <span>{price}</span>
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mb-3 mb-0">
                    Some info about the product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/*button*/}
                  <div>
                    <Link to="/">
                      <SecondaryButton>Back to homepage</SecondaryButton>
                      <SecondaryButton
                        new
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </SecondaryButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
