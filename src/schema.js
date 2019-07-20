const { gql } = require("apollo-server-express");

module.exports = gql`
  type Author {
    name: String!
  }

  type Book {
    name: String!
    author: String!
    numPages: Int!
  }

  type Query {
    hello: String!
    books: [Book]
    book(name: String!): Book
  }
`;
