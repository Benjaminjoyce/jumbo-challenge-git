import React, { Component } from 'react';
import logo from '../resources/logo.png';
class Header extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper black">
            <img href="/" src={logo} alt=" " />
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
