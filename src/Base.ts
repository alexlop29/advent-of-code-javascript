// deps
var fs = require("fs");

class Base {
  constructor() {}

  parseFile(file) {
    let data = fs.readFileSync(file, "utf8");
    let lines = data.split("\n");
    return lines;
  }
}

export { Base };
