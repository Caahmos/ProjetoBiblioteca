const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const path = require('node:path');
const route = require('./routes');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(route);

app.listen(3000, () => {
    console.log('O servidor está rodando!');
    console.log('http://localhost:3000');
});


