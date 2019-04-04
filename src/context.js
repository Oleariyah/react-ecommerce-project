import React, { Component } from "react";

const DataContext = React.createContext();

class ProductProvider extends Component {
  render() {
    return (
      <DataContext.Provider value="test">
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const ProductConsumer = DataContext.Consumer;

export { ProductProvider, ProductConsumer };
