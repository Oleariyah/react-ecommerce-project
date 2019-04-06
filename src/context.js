import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const DataContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };

  componentDidMount = () => {
    this.setProducts();
  };
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleDetail = () => {
    console.log("hello World");
  };

  addToCart = () => {
    console.log("hello World");
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const ProductConsumer = DataContext.Consumer;

export { ProductProvider, ProductConsumer };
