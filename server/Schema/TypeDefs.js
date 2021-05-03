const {gql} = require('apollo-server');

const typeDefs = gql`
type Query {
    getAllNerds: [Nerd!]!
}

type Nerd {
    id: ID!
    name: String!
    married: Boolean!
}

`;

module.exports = { typeDefs };
