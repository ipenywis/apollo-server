const { Books } = require("./constants");

module.exports = {
  Query: {
    hello() {
      return "Hello World from the Other Side!";
    },

    books() {
      return Books;
    },

    book(root, args, context) {
      const { name } = args;
      if (!name || name === "") return null;
      const foundBook = Books.find(book => book.name === name);
      if (!foundBook) return null;
      return foundBook;
    }
  }
};
