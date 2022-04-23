### Hexlet tests and linter status:
[![Actions Status](https://github.com/elizablok/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/elizablok/backend-project-lvl2/actions)
[![Node CI](https://github.com/elizablok/backend-project-lvl2/actions/workflows/node-ci.yml/badge.svg)](https://github.com/elizablok/backend-project-lvl2/actions/workflows/node-ci.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/78ad88dafa56eede88a0/maintainability)](https://codeclimate.com/github/elizablok/backend-project-lvl2/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/78ad88dafa56eede88a0/test_coverage)](https://codeclimate.com/github/elizablok/backend-project-lvl2/test_coverage)

### Description:

Th second project from 'Hexlet' presents a programme showing the difference between the content of two files. 

#### Features:
- forming a report in the following formats: *json*, *plain*, *stylish*;
- working with extensions: *json*, *yaml*;
- checking the programme version.

### Setup:
* Clone the repository to your computer: `git@github.com:elizablok/backend-project-lvl2.git` (using SSH)
* Go to the root directory of the project
* Install dependencies with the `make install` command
* Install the package with the `npm link` command. You may need sudo roots.

### Usage:
Type `gendiff -h` OR `gendiff --help` to find out how to run the command.
For example to receive a report in the 'stylish' format:
- `gendiff --format stylish *filePath1* *filePath2*` OR `gendiff *filePath1* *filePath2*` (as *stylish* is a default format).

#### Tutorial of getting a *stylish* format report:
[![asciicast](https://asciinema.org/a/489297.svg)](https://asciinema.org/a/489297)

#### Tutorial of getting a *plain* format report:
[![asciicast](https://asciinema.org/a/489299.svg)](https://asciinema.org/a/489299)

#### Tutorial of getting a *json* format report:
[![asciicast](https://asciinema.org/a/489300.svg)](https://asciinema.org/a/489300)
