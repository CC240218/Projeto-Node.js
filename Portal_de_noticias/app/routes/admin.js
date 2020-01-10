module.exports=function(applycation){
    applycation.get('/formulario_inclusao_noticia', function(req,res){
        res.render("admin/form_add_noticia")
        });
}