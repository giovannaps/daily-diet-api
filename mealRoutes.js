const express = require('express');
const router = express.Router();
const controller = require('../controllers/mealController');
const auth = require('../middlewares/authMiddleware');

router.use(auth);
router.post('/', controller.createMeal);
router.get('/', controller.getMeals);
router.get('/metrics', controller.getMetrics);
router.get('/:id', controller.getMeal);
router.put('/:id', controller.updateMeal);
router.delete('/:id', controller.deleteMeal);

module.exports = router;
