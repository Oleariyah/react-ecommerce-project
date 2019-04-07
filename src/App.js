import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import Default from "./components/Default";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import ProductLists from "./components/ProductLists";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductLists} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </Fragment>
    );
  }
}

export default App;
