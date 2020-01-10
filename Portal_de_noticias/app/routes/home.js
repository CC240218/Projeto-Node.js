module.exports = function(applycation){
    applycation.get('/', function(req,res){
        res.render("home/index")
        });
}