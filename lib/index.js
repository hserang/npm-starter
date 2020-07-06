#!/usr/bin/env node
"use strict";
var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var path = require("path");
var program = require("commander");
var pkg = require("../package.json");
var description = pkg.description, name = pkg.name, version = pkg.version;
var sampleFunction = function (option) {
    console.log("execute option " + option);
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
