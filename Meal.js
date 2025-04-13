const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  description: String,
  datetime: Date,
  onDiet: Boolean
});

module.exports = mongoose.model('Meal', MealSchema);
