const User = require('./User')
const Corrida = require('./Corrida')

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, {id}) => User.findById(id),
        corridas: () => Corrida.find()
    },
    Mutation: {
        createUser: (_, {name, email}) => User.create({name, email}),
        criarCorrida: (_,{longitude, latitude}) => Corrida.create({longitude, latitude})
    }
};
