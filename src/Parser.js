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
      body: this.Literal(),
    };
  }

  /**
   * Literal
   *    : NumericLiteral
   *    | StringLiteral
   *    ;
   */
  Literal() {
    console.log(this.lookahead.type);
    switch (this.lookahead.type) {
      case "NUMBER":
        return this.NumericLiteral();
      case "STRING":
        return this.StringLiteral();
    }
    throw new SyntaxError("Literal: unexpected literal production");
  }

  /**
   * StringLiteral
   *    : STRING
   *    ;
   */
  StringLiteral() {
    const token = this._eat("STRING");
    return {
      type: "StringLiteral",
      value: token.value.slice(1, -1),
    };
  }
  /**
   * NumericLiteral
   *    : NUMBER
   *    ;
   */
  NumericLiteral() {
    const token = this._eat("NUMBER");
    return {
      type: "NumericLiteral",
      value: Number(token.value),
    };
  }

  /**
   * Expects a token of a given type.
   */
  _eat(tokenType) {
    const token = this.lookahead;
    console.log({ token });
    console.log(tokenType);

    if (token == null) {
      throw new SyntaxError(
        `Unexpected end of input, expected: "${tokenType}"`
      );
    }

    if (token.type !== tokenType) {
      throw new SyntaxError(
        `Unexpected token: "${token.value}", expected "${tokenType}"`
      );
    }

    // Advance to next token.
    this._lookahead = this._tokenizer.getNextToken();

    return token;
  }
}

module.exports = {
  Parser,
};
