//Export the Rock Paper Scissors function
export function rps(playerShot) {
  //possible choices for RPS(rock, paper, scissors)
  const shots = ["rock", "paper", "scissors"];

  return playGame(playerShot, shots);
}

//Export the Rock Paper Scissors Lizard Spock function
export function rpsls(playerShot) {
  //Define the possible choices for RPSLS
  const shots = ["rock", "paper", "scissors", "lizard", "spock"];

  return playGame(playerShot, shots);
}

//shared playGame
function playGame(playerShot, shots) {
  //generate random opponentShot
  const opponentShot = shots[Math.floor(Math.random() * shots.length)];

  // If playerShot is undefined, return a random shot for the player
  if (playerShot === undefined) {
    return { player: opponentShot };
  }

  //case insensitive
  playerShot = playerShot.toLowerCase();

  //rangeCheck
  if (!shots.includes(playerShot)) {
    throw new RangeError("Shot Out of Range");
  }

  const results = getResults(playerShot, opponentShot, shots);
  return { player: playerShot, opponent: opponentShot, result: results };
}

//Determine the result
function getResults(playerShot, opponentShot, shots) {
  //tie
  if (playerShot === opponentShot) {
    return "tie";
  }

  //win
  const winningCases = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  //win/lose
  return winningCases[playerShot].includes(opponentShot) ? "win" : "lose";
}
