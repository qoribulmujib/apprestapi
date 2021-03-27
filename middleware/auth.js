var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//buat controller untuk register
module.exports = function(req, res){
    var post = {
        username: req.body.username,
        password: md5(req.body.password),
        email: req.body.email,
        role: req.body.role,
        tanggalDaftar: new Date()
    }
    var query = "SELECT email FROM ?? WHERE ?? = ?";
    var tabel = ["users", "email", post.email];
    query = mysql.format(query, tabel);

    connection.query(query, function(error, rows){
        if(error){
            console.log(error);
        }else {
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["users"];
                query = mysql.format(query, table);
                connection.query(query, post, function(error, rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok('berhasil terdaftar', res);
                    }
                });
            }else {
                response.ok("email sudah terdaftar", res);
            }
        }
    });
};
