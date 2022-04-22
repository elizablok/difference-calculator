#!/usr/bin/env node

import { Command } from 'commander';
import getDifference from '../src/diff.js';

const gendiff = new Command();

gendiff
  .description('compares two configuration files and shows a difference')
  .version('0.0.1', '-V, --version', 'output version number')
  .option('-f, --format [type]', 'output format (default: "stylish")', 'stylish')
  .helpOption('-h, --help', 'display help for command')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const options = gendiff.opts();
    console.log(getDifference(filepath1, filepath2, options.format));
  })
  .parse(process.argv);
