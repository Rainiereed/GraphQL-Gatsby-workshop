const { nerds } = require('../data');

const resolvers = {
    Query: {
        getAllNerds() {
            return nerds;
        }
    }
}

module.exports = { resolvers };