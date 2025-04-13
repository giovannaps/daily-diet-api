const User = require('../models/User');
const crypto = require('crypto');

exports.createUser = async (req, res) => {
  const { username } = req.body;
  const token = crypto.randomBytes(16).toString('hex');
  const user = await User.create({ username, token });
  res.status(201).json({ id: user._id, username: user.username, token });
};
