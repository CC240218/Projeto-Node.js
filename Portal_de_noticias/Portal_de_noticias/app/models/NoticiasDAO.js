function NoticiasDAO(connectio){
    this._connectio = connectio

}
    NoticiasDAO.prototype.getNoticias = function(callback){
        this._connectio.query('select * from noticias',callback);
    }
    NoticiasDAO.prototype.getNoticia = function(callback){
        this._connectio.query('select * from noticias where id_noticia = 20',callback);
    }
    NoticiasDAO.prototype.salvarNoticia = function(noticias,callback){
        this._connectio.query('insert into noticias set ?',noticias,callback)
    }
    module.exports = function(){
return NoticiasDAO;
}