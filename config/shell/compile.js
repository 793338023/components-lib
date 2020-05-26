const shell = require("shelljs");
const ora = require("ora");
const { exec } = shell;

function compile() {
  return new Promise(function(res, rej) {
    const spinner = ora("开始打包编译").start();
    exec("npm run build", { silent: true }, function(code, stdout) {
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

module.exports = compile;
