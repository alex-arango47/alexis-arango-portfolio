const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.index);
router.get('/email/', mainControllers.email);
router.post('/email/', mainControllers.emailProcess);

module.exports = router;