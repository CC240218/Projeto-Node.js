var applycation = require('./config/server');

var rotaHome = require('./app/routes/home')(applycation);
var rotanoticias = require('./app/routes/noticias')(applycation);
var rotaAdmin = require('./app/routes/admin')(applycation);

applycation.listen(3000,function(){
    console.log('Conexão Revisão_node');
})