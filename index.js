const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const typeDefs = gql`
  type Query {
    totalDays: Int!
  }
`;

// functions that are going to return data for the schema
/* const resolvers = {

} */

const server = new ApolloServer({
  typeDefs,
  // resolvers
  mocks: true, // mocks data for the schema
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => console.log("server running at", url));
