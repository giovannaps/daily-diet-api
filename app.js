const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const mealRoutes = require('./routes/mealRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/daily_diet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/users', userRoutes);
app.use('/meals', mealRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
