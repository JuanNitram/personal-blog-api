var express = require('express');
var router = express.Router();

const ContactController = require('../controllers/ContactController');
const contactController = new ContactController();

router.post('/send', contactController.send);

module.exports = router;
