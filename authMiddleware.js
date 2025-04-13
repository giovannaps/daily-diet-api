const User = require('../models/User');

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Token required');

  const user = await User.findOne({ token });
  if (!user) return res.status(401).send('Invalid token');

  req.user = user;
  next();
};
