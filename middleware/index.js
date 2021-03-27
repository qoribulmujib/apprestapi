var express = require('express');
var auth = require('./auth');
var router = express.Router();

//menmabahkan menu registrasi 
router.post('/api/v1/register', auth);

module.exports = router;