/**
 * Palabra parser implemented in recursive descent.
 */
class Parser {
  /**
   * Parses a string into abstract syntax tree
   */
  parse(string) {
    this._string = string;
  }
  /**
   * Main entry point
   *
   * Program
   *    : NumericLiteral
   *    ;
   */
  Program() {
    return this.NumericLiteral();
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
