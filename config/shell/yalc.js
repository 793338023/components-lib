const shell = require("shelljs");
const chalk = require("chalk");
const ora = require("ora");

const { which, exec } = shell;

function installYalc() {
  return new Promise(function(res, rej) {
    console.log(`全局安装: ${chalk.green("yalc")}`);
    const spinner = ora("install yalc").start();
    exec("npm i -g yalc", { silent: true }, function(code, stdout) {
      if (code !== 0) {
        spinner.fail(stdout);
        rej();
      } else {
        spinner.succeed(stdout);
        res();
      }
    });
  });
}

async function hasYalc() {
  if (!which("yalc")) {
    await installYalc();
    return true;
  }
}

module.exports = hasYalc;
