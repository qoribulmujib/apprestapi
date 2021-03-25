'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("aplikasi berjalan lancar", res);
};

//menampilkan semua data mahasiswa
 exports.tampilSemuaData = function(req, res){
     connection.query("SELECT * FROM mahasiswa", function(error, rows, fields){
         if(error){
             console.log(error);
         }else {
             response.ok(rows, res);
         }
     });
 };

//menampilkan semua data berdasarkan id
exports.tampilDataSesuaiId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE idMahasiswa = ?", [id], 
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};