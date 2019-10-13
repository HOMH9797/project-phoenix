const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path")
// const glob = require('glob');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//static files
app.use(express.static(path.join(__dirname,'public')));

// force: true will drop the table if it already exists
// const db = require("./src/database/db.config");
// db.sequelize.sync({ force: false }).then(() => {
//   console.log("remember drop and Resync with { force: false }");
// });

require("./src/routes/user.routes")(app)
// glob( './src/routes/**/*.js', ( err, files ) => {
//   if(err) throw 'error cargando las rutas en server'
//   files.forEach(file => require(file)(app));
// });

// Create a Server
var server = app.listen(process.env.PORTSERVER, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});