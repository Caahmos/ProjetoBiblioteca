const mysql = require('mysql');

const conne = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '.anchorCabecalhoHTML5!',
    database: 'nodemysql'
})

conne.connect();

class Livros {
    constructor(body) {
            this.body = body,
            this.errors = [],
            this.user = null
    }

    cadastrar() {
        const sqlQuery = `INSERT INTO books (title, pages) VALUES ('${this.body.title}', '${this.body.pages}')`;
        conne.query(sqlQuery, (err) => {
            console.log(err);
        })
    }

    atualizar(id){
        const sqlQuery = `UPDATE books SET title = '${this.body.title}', pages = '${this.body.pages}' WHERE id = ${id}`;
        conne.query(sqlQuery, (err) => {
            console.log(err);
        })
    }

    static exibirLivros(callback){
        const sqlQuery = 'SELECT * FROM books';
        
        conne.query(sqlQuery, (err, data) => {
            if(err) console.log(err);

            const livros = data;
            callback(null, livros);
        })
    }

    static exibirLivrosporId(id, callback){
        const sqlQuery = `SELECT * FROM books WHERE id=${id}`;
        
        conne.query(sqlQuery, (err, data) => {
            if(err) console.log(err);

            const livros = data;
            callback(null, livros);
        })
    }

    static removerLivro(id){
        const sqlQuery = `DELETE FROM books WHERE id = ${id}`;

        conne.query(sqlQuery, (err) => {
            if(err) console.log(err);
        })
    }
}

module.exports = Livros;