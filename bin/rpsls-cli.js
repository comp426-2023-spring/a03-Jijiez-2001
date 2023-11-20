#!/usr/bin/env node
import { rpsls } from "../lib/rpsls.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

//handle with help documentation
if (args.h || args.help) {
  printHelp();
  process.exit(0);
}

//handle with rules documentation
if (args.r || args.rules) {
  printRules();
  process.exit(0);
}

const res = rpsls(args._[0]);
try {
  console.log(JSON.stringify(res));
  process.exit(0);
} catch (err) {
  if (err instanceof RangeError) {
    console.log(
      " Rules for the Lizard-Spock Expansion of Rock Paper Scissors:",
      "\n\n",
      "  - Scissors CUTS Paper",
      "\n",
      "  - Paper COVERS Rock",
      "\n",
      "  - Rock SMOOSHES Lizard",
      "\n",
      "  - Lizard POISONS Spock",
      "\n",
      "  - Spock SMASHES Scissors",
      "\n",
      "  - Scissors DECAPITATES Lizard",
      "\n",
      "  - Lizard EATS Paper",
      "\n",
      "  - Paper DISPROVES Spock",
      "\n",
      "  - Spock VAPORIZES Rock",
      "\n",
      "  - Rock CRUSHES Scissors"
    );
    //printHelp();
    //printRules();
  }
}

function printHelp() {
  console.log(`Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n',
    '  -h, --help        display this help message and exit\n',
    '  -r, --rules       display the rules and exit\n\nExamples:\n',
    '  node-rpsls        Return JSON with single player RPSLS result.\n',
    '                    e.g. {"player":"rock"}\n',
    '  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n',
    '                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
  process.exit(0);
}

function printRules() {
  console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock SMOOSHES Lizard\n',
    ' - Lizard POISONS Spock\n',
    ' - Spock SMASHES Scissors\n',
    ' - Scissors DECAPITATES Lizard\n',
    ' - Lizard EATS Paper\n',
    ' - Paper DISPROVES Spock\n',
    ' - Spock VAPORIZES Rock\n',
    ' - Rock CRUSHES Scissors`);
  process.exit(0);
}
