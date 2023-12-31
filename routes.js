const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const livrosController = require('./controllers/livrosController');

route.get('/', homeController.index);
route.get('/books', livrosController.exibir);

route.post('/books/insertBooks', livrosController.cadastrar);
route.post('/books/atualizarLivro/:id', livrosController.atualizar);

route.get('/books/:id', livrosController.buscarId);
route.get('/books/apagar/:id', livrosController.apagar)

module.exports = route;