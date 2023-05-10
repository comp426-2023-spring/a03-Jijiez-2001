#!/usr/bin / env node
import { rpls } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    printHelp();
    process.exit(0);
}

if (args.r || args.rules) {
    printRules();
    process.exit(0);
}

const res = rps(args._[0]);
try {
    console.log(JSON.stringify(res));
} catch (err) {
    console.error(`Error: ${err.message}\n`);
    printHelp();
    printRules();
    process.exit(1);
}

function printHelp() {
    console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n',
        '  -h, --help      display this help message and exit\n',
        '  -r, --rules     display the rules and exit\n\nExamples:\n',
        '  node-rps        Return JSON with single player RPS result.\n',
        '                  e.g. {"player":"rock"}\n',
        '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n',
        '                  e.g {"player":"rock","opponent":"scissors","result":"win"}');
}

function printRules() {
    console.log('Rules for Rock Paper Scissors:\n\n',
        '  - Scissors CUTS Paper\n',
        '  - Paper COVERS Rock\n',
        '  - Rock CRUSHES Scissors');
}

