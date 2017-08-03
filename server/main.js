"use strict"


// let https = require("https");
// let http = require("http");
let fs = require('fs');
let express = require("express");
let bodyParser = require('body-parser');
let routes  = require('./routes');
let path = require('path');
var util = require('util');
// let formidable = require('formidable');
// let contentful = require('contentful');
// let request = require('request');
// let ejs = require('ejs');
// let sessions = require('client-sessions');
// let fsextra  = require('fs-extra');
let app = express();
// let aws = require('aws-sdk');
// let tour  = require('./tour/tour.js');
// let prismic = require('./api/prismic');
// let PrismicConfig = require('./api/prismic/config.js');
// let PrismicNode = require('prismic-nodejs');



// app.engine('html', ejs.renderFile);
app.set('port', (process.env.PORT || 8081));
app.set('view engine', 'html');
app.use(express.static(__dirname + "/../client") );
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
})
// app.get('*', routes.index);
// app.listen(8081, () => console.log("listening on 8081"));
