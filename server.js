const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const path = require('node:path');
const route = require('./routes');
const mysql = require('mysql');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

const conne = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '.anchorCabecalhoHTML5!',
    database: 'nodemysql'
})

conne.connect(function(err){
    if(err) console.log(err);

    console.log('Conectou ao banco de dados!');

    app.emit('Pronto');
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(route);

app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('O servidor está rodando!');
        console.log('http://localhost:3000');
    });
})

module.exports = conne;

