var express = require('express');
var consing = require('consign');
var body_parser = require('body-parser');
var express_validator = require('express-validator');

var applycation = express();
applycation.set('view engine','ejs');
applycation.set('views','./app/views');

applycation.use(body_parser.urlencoded({extended : true}));
applycation.use(express_validator());

consing()
.include("app/routes")
.then("config/dbConnection.js")
.then("app/models")
.then("app/controllers")
.into(applycation);
module.exports = applycation;