const { Parser } = require("../src/Parser");

const parser = new Parser();

const program = `'26'`;
const ast = parser.parse(program);
console.log(JSON.stringify(ast, null, 2));
