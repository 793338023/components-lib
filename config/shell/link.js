const shell = require("shelljs");
const chalk = require("chalk");
const ora = require("ora");
const yalc = require("./yalc");
const compile = require("./compile");

const { exec } = shell;

function publish() {
  return new Promise(function(res, rej) {
    const spinner = ora("yalc publish").start();
    exec("yalc publish", { silent: true }, function(code, stdout) {
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

async function link() {
  try {
    await yalc();
    await compile();
    await publish();
  } catch (err) {
    console.log(chalk.red("link 失败..."));
  }
}

module.exports = link;
