import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';

import Thumb from './Thumb';


class Product extends Component {
  render() {
    const product = props.product;
  
  return (
    <div
      className="shelf-item"
      onClick={() => props.addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
      <Thumb
        classes="shelf-item__thumb"
        src={require(`./static/data/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
}
}


export default Product;
