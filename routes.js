'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    app.route('/tampil')
        .get(jsonku.tampilSemuaData);

    app.route('/tampil/:id')
        .get(jsonku.tampilDataSesuaiId);

    app.route('/tambah')
        .post(jsonku.MenambahDataMahasiswa);
}