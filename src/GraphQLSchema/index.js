const {makeExecutableSchema} = require('graphql-tools');

const typeDefs = require('./types');
const resolvers = require('./resolvers');

const GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = GraphQLSchema;