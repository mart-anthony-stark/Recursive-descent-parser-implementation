/**
 * Palabra parser implemented in recursive descent.
 */
const { Tokenizer } = require("./Tokenizer");

class Parser {
  /**
   * Initializes the parser.
   */
  constructor() {
    this._string = "";
    this._tokenizer = new Tokenizer();
  }

  /**
   * Parses a string into abstract syntax tree
   */
  parse(string) {
    this._string = string;
    this._tokenizer.init(string);

    // Prime the tokenizer to obtain first
    // token which is our lookahead. The lookahead is
    // used for predictive parsing
    this.lookahead = this._tokenizer.getNextToken();

    // Parse recursively starting from the main
    // entry point, the Program:
    return this.Program();
  }
  /**
   * Main entry point
   *
   * Program
   *    : NumericLiteral
   *    ;
   */
  Program() {
    return {
      type: "Program",
      body: this.NumericLiteral(),
    };
  }
  /**
   * NumericLiteral
   *    : NUMBER
   *    ;
   */
  NumericLiteral() {
    return {
      type: "NumericLiteral",
      value: Number(this._string),
    };
  }
}

module.exports = {
  Parser,
};
