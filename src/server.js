const {GraphQLServer} = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();
// const mongod = new MongoMemoryServer();
mongoose.connect(mongod.getUri(), {
    useCreateIndex: true,
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
})
    .then(() => logger.info("Mongo DB Memory Server conectado com sucesso"))
    .catch((err) => logger.error("Erro ao conectar ao Mongo DB Memory Server", err));
;

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start();
