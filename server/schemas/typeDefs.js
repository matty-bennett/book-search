const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookInput): User
        removeBook(bookId: String!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String
        description: String
        authors: [String]
        title: String
        image: String
        link: String
    }

    input bookInput {
    bookId: String
    description: String
    authors: [String]
    title: String
    image: String
    link: String
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;

