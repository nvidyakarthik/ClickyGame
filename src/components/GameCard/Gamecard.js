import React from "react";
import "./Gamecard.css";

const Gamecard = props => (
  <div className="card" onClick={()=>props.shuffleImage(props.id)}>
    <div className="card-body">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default Gamecard;
