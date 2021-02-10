const { promisify } = require("util");
const path = require("path");

const download = promisify(require("download-git-repo"));
const open = require("open");

const { commandSpawn } = require("../utils/terminal");
const { vueRepo } = require("../config/repo-config");
const { compiler, writeToFile } = require("../utils/utils");

// 创建项目的action
const createProjectAction = async (project, others) => {
  // 1. clone项目
  await download(vueRepo, project, { clone: true });

  if (others.split() === "and,open") {
    // 2.执行npm install
    const commandOption = process.platform === "win32" ? "npm.cmd" : "npm";
    await commandSpawn(commandOption, ["install"], { cwd: `./${project}` });

    // 3.打开浏览器
    open("http://localhost:8080");

    // 4.运行npm run serve
    await commandSpawn(commandOption, ["run", "serve"], { cwd: `./${project}` });
  }
};

// 添加组件的action
const addCpnAction = async (name, dest) => {
  // 1.有对应的ejs模块
  const result = await compiler("components.vue.ejs", { name: name, lowerName: name.toLowerCase() });
  // 2.编译ejs模版 result
  // 3.result写入到.vue文件中
  const targetPath = path.resolve(dest, `${name}.vue`);
  writeToFile(targetPath, result);
  // 4.放到对应的文件夹中
};

// 添加页面的action
const addPageAction = async (name, dest) => {
  // 添加组件
  const result = await compiler("components.vue.ejs", { name: name, lowerName: name.toLowerCase() });
  const targetPath = path.resolve(dest, `${name}.vue`);
  writeToFile(targetPath, result);

  // 添加store

  // 添加router
  
};

module.exports = {
  createProjectAction,
  addCpnAction,
  addPageAction,
};
