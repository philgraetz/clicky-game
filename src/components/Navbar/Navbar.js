import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render = () => (
    <div className="container nav-container px-0">
      <nav className="navbar sticky-top navbar-light bg-light">
        <a className="navbar-brand" href="/">Clicky Game</a>
        <span className="navbar-text">Click all images exactly once</span>
        <span className="navbar-text">
          Score: {this.props.score} | Top Score: {this.props.topScore}
        </span>        
      </nav>      
    </div>
  )
}

export default Navbar;
