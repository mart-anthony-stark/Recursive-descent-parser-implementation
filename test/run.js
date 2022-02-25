const { Parser } = require("../src/Parser");

const parser = new Parser();

const ast = parser.parse("45a");
console.log(JSON.stringify(ast, null, 2));
