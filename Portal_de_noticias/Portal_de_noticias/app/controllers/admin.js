module.exports.admin = function(applycation, req, res){
    res.render("admin/form_add_noticia", {validacao: {},noticias: {}});
}
module.exports.noticias_salvar = function(applycation, req, res){
    var noticias = req.body;

    req.assert('titulo','precisa-se do titulo').notEmpty();
    req.assert('resumo','Precisa descrever o resumo').notEmpty();
    req.assert('resumo','O resumo deve ser no minimo 5 e no maxino 10').len(5,10);
    req.assert('autor','Nescessita-se do nome do autor').notEmpty();
    req.assert('data_noticia','A data está invalida').isDate({format : 'YYYY-MM-DD'});
    req.assert('data_noticia','A data não foi definida').notEmpty();

    var erro = req.validationErrors();
     
    if (erro) {
       res.render("admin/form_add_noticia", {validacao : erro, noticias : noticias});
       return;
    }
var connection = applycation.config.dbConnection();
var salvarModels = new applycation.app.models.NoticiasDAO(connection);

salvarModels.salvarNoticia(noticias,function(erro,result){
   res.redirect('/noticias');
});
}