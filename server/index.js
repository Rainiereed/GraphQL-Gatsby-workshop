const { ApolloServer } = require('apollo-server');

const { typeDefs } = require('./Schema/TypeDefs');
const { resolvers } = require('./Schema/Resolvers');
const url = 'http://localhost:4000'

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(() => {
   console.log(url);
})
