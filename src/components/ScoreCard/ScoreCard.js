import React from "react";
import "./ScoreCard.css";

const scoreCard = (props) => (<div className="scorecard">
<span>Score : {props.score} | TopScore : {props.topscore}</span>
</div>);

export default scoreCard;