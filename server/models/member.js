const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberSchema = new Schema({
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: String
});

module.exports = mongoose.model("Member", memberSchema);