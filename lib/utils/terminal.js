/**
 * 执行终端命令相关的代码
 */
const { spawn } = require("child_process");
const { resolve } = require("path");
const path = require("path");

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProgress = spawn(...args); // 返回的是一个进程
    childProgress.stdout.pipe(process.stdout);
    childProgress.stderr.pipe(process.stderr);
    childProgress.on("close", () => {
      resolve();
    });
  });
};

module.exports = {
  commandSpawn,
};
