var express = require('express');
var router = express.Router();

const ContactController = new (require('../controllers/ContactController'));

router.post('/send', ContactController.send);

module.exports = router;
