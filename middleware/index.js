var express = require('express');
var auth = require('./auth');
var router = express.Router();

//menmabahkan menu registrasi 
router.post('/api/v1/register', auth.registrasi);

//menambahkan menu login
router.post('/api/v1/login', auth.loggin);

module.exports = router;