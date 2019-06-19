const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = (data) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { data },
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};
