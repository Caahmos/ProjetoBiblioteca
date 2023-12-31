const pool = require('../db/conne');

class Livros {
    constructor(body) {
        this.body = body,
            this.errors = [],
            this.user = null
    }

    cadastrar() {
        const sqlQuery = `INSERT INTO books (??, ??) VALUES (?, ?)`;

        const data = ['title', 'pages', this.body.title, this.body.pages];

        pool.query(sqlQuery, data, (err) => {
            console.log(err);
        })
    }

    atualizar(id) {
        const sqlQuery = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;

        const data = ['title', this.body.title, 'pages', this.body.pages, 'id', id];

        pool.query(sqlQuery, data, (err) => {
            console.log(err);
        })
    }

    static exibirLivros(callback) {
        const sqlQuery = 'SELECT * FROM books';

        pool.query(sqlQuery, (err, data) => {
            if (err) console.log(err);

            const livros = data;
            callback(null, livros);
        })
    }

    static exibirLivrosporId(id, callback) {
        const sqlQuery = `SELECT * FROM books WHERE ?? = ?`;

        const data = ['id', id];

        pool.query(sqlQuery, data, (err, data) => {
            if (err) console.log(err);

            const livros = data;
            callback(null, livros);
        })
    }

    static removerLivro(id) {
        const sqlQuery = `DELETE FROM books WHERE ?? = ?`;

        const data = ['id', id];

        pool.query(sqlQuery, data, (err) => {
            if (err) console.log(err);
        })
    }
}

module.exports = Livros;