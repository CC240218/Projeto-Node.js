var mysql = require('mysql');
var connMysql = function(){
    console.log('conectou na solicitação certa')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rafael70',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    console.log('Aguardando solicitação para o Banco de dados')
return connMysql
}