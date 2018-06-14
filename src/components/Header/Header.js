import React from "react";
import "./Header.css";

const Header = props =>(
  <div>
    <nav className="navbar navbar-inverse">
      <h3 className="col-xs-12">Clicky Game!</h3>
      <h3 className="col-xs-12">Click an image to begin!</h3>
      <h3 className="col-xs-12">Score:0| Top Score:0</h3>
    </nav>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Clicky Game!</h1>
        <p className="lead">Click on an image to earn points, but don't click on any more than once!
        </p>
      </div>
    </div>
  </div>
);

export default Header;