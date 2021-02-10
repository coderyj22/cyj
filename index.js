#!/usr/bin/env node
const program = require("commander");

// 帮助命令
const help = require("./lib/core/help");

const createCommanders = require('./lib/core/create')

const version = require("./package.json").version;

program.version(version);

help();

createCommanders();

program.parse(process.argv);
