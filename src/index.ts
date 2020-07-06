#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const path = require("path");
const program = require("commander");
const pkg = require("../package.json");

const { description, name, version } = pkg;

const sampleFunction = (option: string) => {
    console.log(`execute option ${option}`);
};

// clear terminal if we prefer
// clear();

// broadcast the version in an ascii banner
console.log(chalk.green(figlet.textSync(name, { horizontalLayout: "full" })));

program
    .version(version)
    .description(description)
    .option("-a, --aoption", "option a")
    .option("-b, --boption", "option b")
    .option("-A, --Aoption", "option A")
    .option("-B, --Boption", "option B")
    .parse(process.argv);

// help block
if (!process.argv.slice(2).length) {
    program.outputHelp();
}

if (program.aoption) {
    sampleFunction("aoption");
}

if (program.boption) {
    sampleFunction("boption");
}
