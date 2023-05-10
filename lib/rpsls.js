// Define the available moves for each game
const rpsAct = ['rock', 'paper', 'scissors'];
const rpslsAct = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// Define a function to get a random move from the available moves
function getRandomAct(act) {
    return act[Math.floor(Math.random() * act.length)];
}

// Define a function to determine the result of the game
function determineResult(playerAct, opponentAct) {
    // Define the winning move for each possible player move
    const winningAct = {
        'rock': ['scissors', 'lizard'],
        'paper': ['rock', 'spock'],
        'scissors': ['paper', 'lizard'],
        'lizard': ['paper', 'spock'],
        'spock': ['rock', 'scissors']
    };

    if (playerAct === opponentAct) {
        return 'tie';
    } else if (winningAct[playerAct].includes(opponentAct)) {
        return 'win';
    } else {
        return 'lose';
    }
}

// Define the functions for each game
export function rps(act) {
    if (act === undefined) {
        act = getRandomAct(rpsAct);
    } else if (!rpsAct.includes(act)) {
        console.error(`${act} is out of range.`);
        throw new RangeError();
    }

    const opponentAct = getRandomAct(rpsAct);
    const result = determineResult(act, opponentAct);

    return {
        player: act,
        opponent: opponentAct,
        result: result
    };
}

export function rpsls(act) {
    if (act === undefined) {
        act = getRandomAct(rpslsAct);
    } else if (!rpslsAct.includes(act)) {
        console.error(`${act} is out of range.`);
        throw new RangeError();
    }

    const opponentAct = getRandomAct(rpslsAct);
    const result = determineResult(act, opponentAct);

    return {
        player: act,
        opponent: opponentAct,
        result: result
    };
}

