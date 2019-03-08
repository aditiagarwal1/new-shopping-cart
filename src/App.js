import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import data from './static/data/products.json';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function ProductShirt(props) {
  return <div className="prod">
    {props.products.map(product => <ProductShirtOne product={product} />)}
  </div>
}

function ProductShirtOne(props) {
  return <div className ="item">
    <img
	height={300}
	width={200}
        title={props.product.title}
        src = {require(`./static/data/products/${props.product.sku}_1.jpg`)} />
<p className="center">{props.product.title}</p>
<div className="center">${props.product.price}</div>
<Button className="button">Add to cart</Button>
  </div>
}

class App extends Component {
  constructor(props) {
  super(props);
}
  render() {
    return (
      <div className="pg">
      <p> shopping cart </p>
        <ProductShirt products={data.products} />
      </div>
    );
  }
}

export default App;
