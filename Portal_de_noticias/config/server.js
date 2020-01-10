var express = require('express');
var applycation = express();
applycation.set('view engine','ejs');
applycation.set('views','./app/views')
module.exports = applycation;