const program = require("commander");

const helpOptions = () => {
  program.option("-w --cyj", "a cyj cli");
  program.option("-d --dest <dest>", "a destination folder,例如: -d /src/components");
};

module.exports = helpOptions;
