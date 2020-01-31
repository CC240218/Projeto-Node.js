module.exports = function(applycation){
 applycation.get('/admin', function(req,res){
     //servidor , pastas(app/controllers) , arquivo e nome da função expecifica do arquivo
     applycation.app.controllers.admin.admin(applycation, req, res);
 });
    applycation.post('/noticias/salvar', function(req,res){
    applycation.app.controllers.admin.noticias_salvar(applycation, req, res);

    });
}