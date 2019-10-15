import React from "react";

const DEFAULT_IMG =
  "https://media.giphy.com/media/3osxYfP8SJVa9XpVyo/giphy.gif";

export default function ChoiceCard(props) {
  console.log(props.previousWinner);
  const won = props.title === props.previousWinner;
  let className;
  const hasPreviousGame =
    props.previousWinner === "Computer" || props.previousWinner === "You";

  if (hasPreviousGame) {
    className = won ? "winner" : "loser";
  }

  let prompt;
  if (won) {
    prompt = "Won";
    className = won ? "winner" : "loser";
  } else if (props.previousWinner === "TIE") {
    prompt = "Tie";
  } else if (props.previousWinner === null) {
    prompt = "Start";
  } else {
    prompt = "Lose";
  }

  return (
    <div className={`choice-card ${className} mx-auto `}>
      <h1>{props.title}</h1>
      <img src={props.imgURL || DEFAULT_IMG} alt={props.title} />
      <h3>{prompt}</h3>
    </div>
  );
}
