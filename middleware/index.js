var express = require('express');
var auth = require('./auth');
const verifikasi = require('./verifikasi');
var router = express.Router();

//menmabahkan menu registrasi 
router.post('/api/v1/register', auth.registrasi);

//menambahkan menu login
router.post('/api/v1/login', auth.loggin);

//alamt yang perlu otorization
router.get('/api/v1/rahasia', verifikasi(2), auth.halamanRahasia);

module.exports = router;