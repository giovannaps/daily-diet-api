const Meal = require('../models/Meal');

exports.createMeal = async (req, res) => {
  const meal = await Meal.create({ ...req.body, userId: req.user._id });
  res.status(201).json(meal);
};

exports.getMeals = async (req, res) => {
  const meals = await Meal.find({ userId: req.user._id });
  res.json(meals);
};

exports.getMeal = async (req, res) => {
  const meal = await Meal.findOne({ _id: req.params.id, userId: req.user._id });
  if (!meal) return res.status(404).send('Not found');
  res.json(meal);
};

exports.updateMeal = async (req, res) => {
  const meal = await Meal.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );
  if (!meal) return res.status(404).send('Not found');
  res.json(meal);
};

exports.deleteMeal = async (req, res) => {
  await Meal.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
  res.status(204).send();
};

exports.getMetrics = async (req, res) => {
  const meals = await Meal.find({ userId: req.user._id });
  const total = meals.length;
  const onDiet = meals.filter(m => m.onDiet).length;
  const offDiet = total - onDiet;

  let bestStreak = 0, current = 0;
  meals.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  meals.forEach(meal => {
    if (meal.onDiet) {
      current += 1;
      if (current > bestStreak) bestStreak = current;
    } else {
      current = 0;
    }
  });

  res.json({ total, onDiet, offDiet, bestStreak });
};
