import React, { Component } from 'react';

import Shelf from '../Shelf';

/*
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Shelf />
        </main>
      </div>
    );
  }
}

export default App;
