import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import info from './static/data/products.json';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


 class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default App;

/*
class Product extends Component {
  render() {
    return (
      <Col md={2} className="prod">
        <img src={require(`./static/data/products/${this.props.product.sku}_1.jpg`)} />
        <h1>{this.props.product.title}</h1>
        <h1>{`${this.props.product.price}`}</h1>
        <Button>Add Item to Cart</Button>
      </Col>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Product products={info.products} />
      </div>
    );
  }
}

export default App;

*/

/*
class Product extends Component {
  render() {
    return (
      <div>
        <img src={require(`./static/data/products/${this.props.product.sku}_1.jpg`)} />
        <h1>{this.props.product.title}</h1>
        <h1>{`${this.props.product.price}`}</h1>
        <Button>Add Item to Cart</Button>
</div>
    )
  }
}

class App extends Component {
  render() {
    return (
    <div className="App">
<Product />
  </div>
);
}
}

export default App;
*/

/* import Product from './Product';
import './product.js'; */
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
*/

/*
class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
       );
  }
}
      
  
const Thumb = props => {
  return (
    <div className={props.classes}>
      <img src={props.src} alt={props.alt} title={props.title} />
    </div>
  );
};

export default App;
*/

/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default App;
*/

/*
class App extends Component {
  render() {
    return (
      <div className="App">
      <main>
          <Product />
        </main>
      </div>
    );
  }
}

export default App;*/

