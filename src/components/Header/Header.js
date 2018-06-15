import React from "react";
import "./Header.css";

const Header = props =>(
  <div>
    <div className="navbar">{props.children}</div>
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