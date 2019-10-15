export const CHOICES = {
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  }
};

export const getRandom = userChoice => {
  let choiceNames = Object.keys(CHOICES);
  let randomIndex = Math.floor(Math.random() * 3);
  let choiceName = choiceNames[randomIndex];
  return CHOICES[choiceName];
};

export const findWinner = playerChoice => {
  const userChoice = playerChoice;
  const computerChoice = getRandom().name;
  let result;

  if (userChoice === computerChoice) {
    result = "TIE";
  } else if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "WIN" : "LOSE";
  } else if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "WIN" : "LOSE";
  } else if (userChoice === "paper") {
    result = computerChoice === "rock" ? "WIN" : "LOSE";
  }
  return [result, computerChoice];
};
