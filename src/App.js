import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import info from './static/data/products.json';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
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

/*
class MultProducts extends Component {
  render() {
    let cols = this.props.products.map((product) => <Product key={product.sku} product={product} />)
    let rows = []
    let temp = []
    for (let i in cols) {
      if (i % 4 === 0 && i != 0) {
        rows.push(temp)
        temp = []
      }
      temp.push([cols[i]])
    }
    for (let i in 4 - temp.length) {
      temp.push(<Col md={2}></Col>)
    }
    rows.push(temp)

    return (
      <div className="prod">
        <div>
        {rows.map(row =>
          <Row>
            <Col md={2}></Col>
            {row}
          </Row>)
        }
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MultProducts products={info.products} />
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

