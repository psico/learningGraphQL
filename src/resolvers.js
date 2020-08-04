// const users = [
//     { id: 1, name: "João Gabriel", email: "joaogabriel@teste.com" },
//     { id: 2, name: "Virgília", email: "virgília@teste.com" }
// ];
const User = require('./User')

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, {id}) => User.findById(id)
    },
    Mutation: {
        createUser: (_, {name, email}) => User.create({name, email})
    }
};
