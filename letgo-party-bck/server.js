const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path")
const cors = require("cors");
const glob = require('glob');

require('dotenv').config({ path: path.join(__dirname, '/.env') });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

//static files
app.use(express.static(path.join(__dirname, 'public')));

// force: true will drop the table if it already exists
// const db = require("./src/database/db.config");
// db.sequelize.sync({ force: false }).then(() => {
//   console.log("remember drop and Resync with { force: false }");
// });

app.disable('x-powered-by');

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

glob( './src/routes/**/*.js', ( err, files ) => {
  if(err) throw 'error cargando las rutas en server'
  files.forEach(file => require(file)(app));
});

// Create a Server
var server = app.listen(process.env.PORTSERVER, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});