const {GraphQLServer} = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const {MongoMemoryServer} = require('mongodb-memory-server');

(async () => new MongoMemoryServer())().then(async (data) => {
    mongoose.connect(await data.getUri(), {
        useCreateIndex: true,
        useNewUrlParser: true,
        connectTimeoutMS: 10000,
    })
        .then(() => console.log("Mongo DB Memory Server conectado com sucesso"))
        .catch((err) => console.log("Erro ao conectar ao Mongo DB Memory Server", err));


    const server = new GraphQLServer({
        typeDefs: path.resolve(__dirname, 'schema.graphql'),
        resolvers
    });

    server.start();
});
