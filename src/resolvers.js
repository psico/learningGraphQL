const users = [
    { id: 1, name: "João Gabriel", email: "joaogabriel@teste.com" },
    { id: 2, name: "Virgília", email: "virgília@teste.com" }
];

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },
    Mutation: {
        createUser: () => users[0]
    }
};
