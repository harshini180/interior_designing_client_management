const express = require('express');
const router = express.Router();
const { createFeedback, getFeedbacks } = require('../controllers/feedbackController');
const { protect } = require('../middleware/auth');

router.post('/', protect, createFeedback);
router.get('/', protect, getFeedbacks);

module.exports = router;