/* 
This will serve as our RESTfulAPI Server.
*/

var express = require("express");
var app = express();
var fs = require("fs");
/* 
// Ajax call for /listUsers
app.get("/listUsers", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

// Here we addd the "user" data
var user = {
    user6: {
      name: "mohit2",
      password: "password5",
      profession: "teachers",
      id: 6,
    },
  };
  
  // Here we added a user and we can navigate or see it through http://localhost:8082/addUser
  app.post("/addUser", function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
      data = JSON.parse(data);
      data["user5"] = user["user5"];
      console.log(data);
      res.end(JSON.stringify(data));
    });
  });
 */
/* 
// Here we added these next lines for us to see the Details of a certain user.

app.get("/:id", function (req, res) {
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    var users = JSON.parse(data);
    var user = users["user" + req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  });
});
 */
// Here we added these next lines for us to DELETE a certain User or ID

var id = 2;

app.delete("/deleteUser", function (req, res) {
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    delete data["user" + 2];

    console.log(data);
    res.end(JSON.stringify(data));
  });
});

var server = app.listen(8082, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s%s", host, port);
});
