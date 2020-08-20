const mongoose = require('mongoose');

const CorridaSchema = new mongoose.Schema({
    longitude: String,
    latitude: String,
});

module.exports = mongoose.model("Corrida", CorridaSchema);
