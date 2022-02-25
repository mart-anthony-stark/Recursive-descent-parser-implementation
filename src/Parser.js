/**
 * Palabra parser implemented in recursive descent.
 */
class Parser {
  /**
   * Parses a string into abstract syntax tree
   */
  parse(string) {
    this._string = string;

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
