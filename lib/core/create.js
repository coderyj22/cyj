const program = require("commander");

const { createProjectAction, addCpnAction, addPageAction } = require("./actions");

// 创建命令
const createCommands = () => {
  // cyj create <ProjectName>
  program
    .command("create <project> [others...]")
    .description(
      `
      clone repository into a folder,
      创建并拉取项目,
      others: [] 例如: and open(将会执行npm install 并打开8080端口),
    `
    )
    .action(createProjectAction);

  // cyj addCpn <ComponentName> -d <Position>
  program
    .command("addCpn <name>")
    .description(`添加组件`)
    .action((name) => {
      addCpnAction(name, program._optionValues.dest || "src/components");
    });

  program.command("addPage <PageName>").description("添加page页面").action(addPageAction);
};

module.exports = createCommands;
