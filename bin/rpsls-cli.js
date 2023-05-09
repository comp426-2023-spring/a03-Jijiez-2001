#!/usr/bin/env node
import minimist from 'minimist';
import { rpsls } from '../lib/rpsls.js';

var args = minimist(process.argv.slice(2));

if (args.h || args.help) {
	helpM();
	process.exit(0);
}
if (args.r || args.rules) {
	rulesM();
	process.exit(0);
}