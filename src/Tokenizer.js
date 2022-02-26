/**
 * Tokenizer class.
 *
 * Lazily pulls a token from a stream.
 */
class Tokenizer {
  /**
   * Initializes the string.
   */
  init(string) {
    this._string = string;
    this._cursor = 0;
  }

  isEOF() {
    return this._cursor === this._string.length;
  }

  /**
   * Whether we still have more tokens.
   */
  hasMoreTokens() {
    return this._cursor < this._string.length;
  }

  /**
   * Obtains next token.
   */
  getNextToken() {
    if (!this.hasMoreTokens()) {
      return null;
    }

    const string = this._string.slice(this._cursor);

    //Numbers:
    const matched = /^\d+/.exec(string);
    if (matched !== null) {
      return {
        type: "NUMBER",
        value: string,
      };
    }

    //Strings:
    if (string[0] === '"') {
      console.log("string");
      let s = "";
      do {
        s += string[this._cursor++];
      } while (string[this._cursor] !== '"' && !this.isEOF());

      s += string[this._cursor++]; // skip "
      console.log(s);
      return {
        type: "STRING",
        value: s,
      };
    }

    return null;
  }
}

module.exports = {
  Tokenizer,
};
