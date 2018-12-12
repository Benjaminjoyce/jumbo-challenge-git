import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

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
        <Link to="/creators/1">
          <button>Browse creators</button>
        </Link>
        <Link to="/events/1">
          <button>Browse events</button>
        </Link>
        <Link to="/series/1">
          <button>Browse series</button>
        </Link>
        <Link to="/stories/1">
          <button>Browse stories</button>
        </Link>
      </div>
    );
  }
}

export default App;
