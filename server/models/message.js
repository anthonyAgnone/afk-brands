const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  discord: String,
  skype: String,
  read: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Message', messageSchema);
