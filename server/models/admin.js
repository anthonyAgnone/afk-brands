const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const adminSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

adminSchema.pre('save', function(next) {
  const admin = this;

  if (!admin.isModified('password')) return next();

  bcrypt.hash(admin.password, 10, (err, hash) => {
    if (err) return next(err);
    admin.password = hash;
    next();
  });
});

adminSchema.methods.checkPassword = function(passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

adminSchema.methods.withoutPassword = function() {
  const admin = this.toObject();
  delete admin.password;
  return admin;
};

module.exports = mongoose.model('Admin', adminSchema);
