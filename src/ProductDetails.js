import React, { Component } from 'react';
import loadProduct from './ProductLoader';

class ProductDetails extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <img src={product.image}/>
        <div>{product.title}</div>
        <div>{product.body}</div>
      </div>
    );
  }
}

export default loadProduct()(ProductDetails);