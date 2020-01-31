//var dbConnection = require('../../config/dbConnection');

module.exports = function(applycation){
    applycation.get('/noticias',function(req,res){

var connection = applycation.config.dbConnection();
var noticiasModels = new applycation.app.models.NoticiasDAO(connection);

noticiasModels.getNoticias(function(erro, result){
    res.render("noticias/noticias",{noticias:result});
});
    });
}