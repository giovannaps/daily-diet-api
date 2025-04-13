const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  token: String, // simplificação para identificar o usuário
});

module.exports = mongoose.model('User', UserSchema);
