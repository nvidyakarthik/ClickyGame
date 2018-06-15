import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card">
  <div className="card-body">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    </div>
  </div>
);

export default GameCard;
