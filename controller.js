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

//menambahkan data mahasiswa
exports.MenambahDataMahasiswa = function(req, res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)', 
    [nim, nama, jurusan],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("berhasil menambah data", res)
        }
    });
};

//mengubah data berdasarkan ID
exports.MengubahDataMahasiswaById = function(req, res){
    var id = req.body.idMahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE idMahasiswa = ?', [nim, nama, jurusan, id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok('data berhasil diubah', res)
        }
    });
};

//menghapus mahasiswa by id
exports.MenghapusMahasiswaById = function(req, res){
    var id = req.body.idMahasiswa;

    connection.query('DELETE FROM mahasiswa WHERE idMahasiswa = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok('data berhasil dihapus', res);
        }
    });
};

//tampilin semua mahasiswa yang telah menggambil maakuliah
exports.MahasiswaMengambilMatakuliah = function(req, res){
    connection.query('SELECT mahasiswa.idMahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN mahasiswa JOIN matakuliah WHERE krs.idMahasiswa = mahasiswa.idMahasiswa AND krs.idMatakuliah = matakuliah.idMatakuliah ORDER BY mahasiswa.idMahasiswa', 
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.oknested(rows, res);
            }
        }
    )
}