#!/usr/bin/env node
import { rps } from "../lib/rpsls.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

//handle with help documentation
if (args.h || args.help) {
  printHelp();
  process.exit(0);
} else if (args.r || args.rules) {
  //handle with rules documentatio
  printRules();
  process.exit(0);
} else {
  const res = rps(args._[0]);
  try {
    console.log(JSON.stringify(res));
    process.exit(0);
  } catch (err) {
    //check if rangeError
    if (err instanceof RangeError) {
      console.error(`${args._[0]} is out of range.`);
      printHelp();
      printRules();
    }
  }
}

function printHelp() {
  console.log(
    "Usage: node-rps [SHOT]\n" +
      "Play Rock Paper Scissors (RPS):\n" +
      " \n" +
      "  -h, --help       display this help message and exit\n" +
      "  -r, --rules      display the rule and exit\n" +
      " \n" +
      "Examples:\n" +
      "  node-rps         Return JSON with single player RPS result.\n" +
      '                   e.g. {"player":"rock"}\n' +
      "  node-rps rock    Return JSON with results for RPS played against a simulated opponent.\n" +
      '                   e.g. {"player":"rock","opponent":"scissors","result":"win"}\n'
  );
  process.exit(0);
}

function printRules() {
  console.log(
    "Rules for Rock Paper Scissors:\n" +
      "\n" +
      "  - Scissors CUTS Paper\n" +
      "  - Paper COVERS Rock\n" +
      "  - Rock CRUSHES Scissors\n"
  );
  process.exit(0);
}
