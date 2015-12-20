/**
 * Created by Jarek on 20/12/2015.
 */
var express = require('express');
var app = express();
app.use('/', express.static('./'));
app.listen(80);