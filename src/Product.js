import React, { Component } from 'react';
import './App.scss';
import data from './static/data/products.json'

/*
import Thumb from './Thumb';

const Product = props => {
  const product = props.product;
  
  return (
    <div className ="product">
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


export default Product;
*/

class Product extends Component {
  render() {
    return (
      <div>
        <img src={require(`./static/data/products/${this.props.product.sku}_1.jpg`)} alt="this.props.product.title"/>
        <h1>{this.props.product.title}</h1>
        <p>{`${this.props.product.price}`}</p>
        <div>Add Item to cart</div>
</div>
    )
  }
}
export default Product;
