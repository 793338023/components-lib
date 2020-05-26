const shell = require("shelljs");
const path = require("path");
const chalk = require("chalk");

const shellType = process.argv[2];

function exist() {
  return shell.test("-f", path.resolve(__dirname, `./shell/${shellType}.js`));
}

if (exist()) {
  const runShell = require(`./shell/${shellType}.js`);
  runShell();
} else {
  console.log(`${chalk.red(`✖ 不存在`)} ./config/shell/${shellType}.js`);
}
