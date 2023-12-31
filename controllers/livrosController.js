const Livros = require('../models/livrosModel');

module.exports.cadastrar = (req, res) => {
    const livro = new Livros(req.body);
    livro.cadastrar();
    res.redirect('/books');
}

module.exports.exibir = (req, res) => {
    const livros = Livros.exibirLivros((err, livros) => {
        console.log(livros);
        res.render('exibir', { livros });
    });
}

module.exports.buscarId = (req, res) => {
    const livros = Livros.exibirLivrosporId(req.params.id, (err, livros) => {
        console.log(livros);
        res.render('editar', { livros });
    });
}

module.exports.apagar = (req, res) => {
    const livro = Livros.removerLivro(req.params.id);
    res.redirect('/books');
}

module.exports.atualizar = (req, res) => {
   const livro = new Livros(req.body);
   livro.atualizar(req.params.id);
   res.redirect('/books');
}