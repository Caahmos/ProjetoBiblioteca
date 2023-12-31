const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '.anchorCabecalhoHTML5!',
    database: 'nodemysql'
})

module.exports = pool;