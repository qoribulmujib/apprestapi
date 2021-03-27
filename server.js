const express = require('express');
const bodyParser = require('body-parser');
let morgan = require('morgan');
const app = express();

//parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

//panggin routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});