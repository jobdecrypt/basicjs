/* 
Sample Hard Coded "Add User". Ajax style.
 */

var express = require("express");
var app = express();
var fs = require("fs");



var server = app.listen(8082, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s%s", host, port);
});
