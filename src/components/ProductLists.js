import React, { Component, Fragment } from "react";
import Product from "./Product";
import Title from "./Title";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products" />
          </div>
        </div>
      </Fragment>
    );
  }
}
