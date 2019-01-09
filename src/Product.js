import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import './App.scss';
import data from './static/data/products/products.json'

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
        <img src={require(`./static/data/products/${this.props.product.sku}_1.jpg`)} alt="this.props.product.title"/>
        <p> {this.props.product.title} </p>
        <p> {`${this.props.product.price}`} </p>
        <Button> Add Item to cart </Button>
    )
  }
}
export default Product;
