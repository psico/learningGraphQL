const {GraphQLServer} = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = (async () => new MongoMemoryServer())().then( async (data) =>{
console.log(await data.getUri());
const uri = await data.getUri();

console.log(uri);

mongoose.connect(uri, {
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
});
