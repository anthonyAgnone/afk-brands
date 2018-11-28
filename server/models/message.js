const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    phoneNumber: String,
    discord: String,
    skype: String
});

module.exports = mongoose.model("Message", messageSchema);