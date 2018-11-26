
import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to="/characters/1">
          <button>Browse characters</button>
        </Link>
        <Link to="/comics/1">
          <button>Browse Comics</button>
        </Link>
      </div>
    );
  }
}

export default App;
