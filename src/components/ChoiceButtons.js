import React from "react";

function updateScroll() {
  var elem = document.getElementById("historyContainer");
  elem.scrollTop = elem.scrollHeight + 100;
}

export default function ChoiceButtons(props) {
  return (
    <div className="buttons">
      <button
        onChange={updateScroll()}
        onClick={() => props.onPlayerChoose("rock")}
        className="btn btn-info"
      >
        Rock
      </button>
      <button
        onChange={updateScroll()}
        onClick={() => props.onPlayerChoose("paper")}
        className="btn btn-info"
      >
        Paper
      </button>
      <button
        onChange={updateScroll()}
        onClick={() => props.onPlayerChoose("scissors")}
        className="btn btn-info"
      >
        Scissors
      </button>
    </div>
  );
}
