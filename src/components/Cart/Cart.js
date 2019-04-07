import React, { Component, Fragment } from "react";
import Title from "../Title";
import CartColumn from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartLists from "./CartLists";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <div className="container">
                    <Title name="Your" title="Cart" />
                    <CartColumn />
                    <CartLists value={value} />
                    <CartTotals value={value} history={this.props.history} />
                  </div>
                </Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
