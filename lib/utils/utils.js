const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const compiler = (template, data) => {
  return new Promise((resolve, reject) => {
    const templatePosition = path.resolve(__dirname, `../templates/${template}`);
    ejs.renderFile(templatePosition, { data }, {}, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content);
};

module.exports = {
  compiler,
  writeToFile,
};
