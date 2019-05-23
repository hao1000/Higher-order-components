import React, { Component } from 'react';
import loadProduct from './ProductLoader';

class ProductSummary extends Component {
  render() {
   
    const { product } = this.props;

    return (
      <div>
        <div>{product.summary}</div>
      </div>
    );
  }
}

export default loadProduct()(ProductSummary);