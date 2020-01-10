var dataBaseConnect = require('../../config/dataBaseConnect')
module.exports = function(applycation){
    applycation.get('/noticias', function(req,res){
var connection = dataBaseConnect();
connection.query('select * from noticias', function(erro,result){
    res.render("noticias/noticias",{noticias : result})
})
        });

}