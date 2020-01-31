var applycation = require('./config/server');


applycation.listen(3000, function(req,res){
    console.log('Conectado!')
})