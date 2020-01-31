module.exports = function(applycation){
    applycation.get('/noticia',function(req,res){
        
        var connection = applycation.config.dbConnection();
        var noticiaModel = new applycation.app.models.NoticiasDAO(connection);

noticiaModel.getNoticia( function(erro,result){
    res.render("noticias/noticia", {noticia : result});
});

    });
}