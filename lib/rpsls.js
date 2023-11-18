//Export the Rock Paper Scissors function
export function rps(playerShot) {
  //possible choices for RPS(rock, paper, scissors)
  const shots = ["rock", "paper", "scissors"];
  //Call the playGame function with the player's choice and the RPS choices
  return playGame(playerShot, shots);
}

//rpsls
export function rpsls(playerShot) {
  const shots = ["rock", "paper", "scissors", "lizard", "spock"];
  return playGame(playerShot, shots);
}

//shared playGame
function playGame(playerShot, shots) {
  //generate random opponentShot
  const opponentShot = shots[Math.floor(Math.random() * shots.length)];

  if (playerShot === undefined) {
    return { player: opponentShot };
  }

  playerShot = playerShot.toLowerCase();

  if (!shots.includes(playerShot)) {
    throw new RangeError("Shot Out of Range");
  }

  const results = getResults(playerShot, opponentShot, shots);
  return { player: playerShot, opponent: opponentShot, result: results };
}

function getResults(playerShot, opponentShot, shots) {
  if (playerShot === opponentShot) {
    return "tie";
  }

  const winningCases = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  return winningCases[playerShot].includes(opponentShot) ? "win" : "lose";
}
