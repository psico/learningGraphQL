const { GraphQLServer } = require("graphql-yoga");
const path = require("path");

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql')
});

server.start();
