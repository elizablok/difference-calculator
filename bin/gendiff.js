#!/usr/bin/env node

import { Command } from 'commander';

const gendiff = new Command();

gendiff
  .description('compares two configuration files and shows a difference')
  .option('-V, --version', 'output version number')
  .option('-F, --format [type]', 'output format (default: "stylish")')
  .helpOption('-H, --help', 'display help for command')
  .argument('<filepath1> <filepath2>')
  .parse(process.argv);
