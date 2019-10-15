import React, { useState } from "react";
import { CHOICES, getRandom, findWinner } from "./utils";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard.js";
import MainNavBar from "./components/MainNavBar.js";
import ChoiceButtons from "./components/ChoiceButtons.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [prompt, setGamePrompt] = useState("START!");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  const [nameSignIn, setNameSignIn] = useState("");
  const [isSignedIn, setisSignedIn] = useState(false);

  const onPlayerChoose = playerChoice => {
    const [result, compChoice] = findWinner(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setGamePrompt(result);
    gameHistory.push(result);
    setGameHistory(gameHistory);
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    if (result === "WIN") {
      setPreviousWinner("You");
    } else if (result === "LOSE") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("TIE");
    }
  };

  return (
    <div className="App">
      <MainNavBar></MainNavBar>
      <div className="container-fluid main-content">
        <div className="row mb-3">
          <div className="col-md-4 themed-grid-col order-xl-1 order-md-1">
            {isSignedIn && (
              <ChoiceCard
                className=""
                winner={true}
                title="Computer"
                previousWinner={previousWinner}
                imgURL={computerChoice && computerChoice.url}
              />
            )}
          </div>

          <div className="col-md-4">
            {isSignedIn && (
              <ChoiceCard
                className=""
                title="You"
                winner={false}
                previousWinner={previousWinner}
                imgURL={playerChoice && playerChoice.url}
              />
            )}
          </div>
          <div className="col-md-4 ">
            {/* <input
              placeholder="Your Name"
              onInput={() => setNameSignIn(this.input)}
            ></input> */}
            <button
              onClick={() => setisSignedIn(!isSignedIn)}
              className="btn btn-success bt-lg"
            >
              START
            </button>
            {isSignedIn && (
              <div className="p-0">
                <ChoiceButtons onPlayerChoose={onPlayerChoose} />
              </div>
            )}

            <div id="historyContainer" className="mx-auto">
              <h3>Game History</h3>
              <ul>
                {gameHistory.map(result => {
                  return <li className="mr-5">{result}</li>;
                })}
              </ul>
            </div>
            <br />
          </div>
        </div>
      </div>
      <footer className="blog-footer">
        <br />
        <br />
        <p>
          <a href="https://getbootstrap.com/">RockPaperScissors</a> by{" "}
          <a href="https://twitter.com/mdo">Steven</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
