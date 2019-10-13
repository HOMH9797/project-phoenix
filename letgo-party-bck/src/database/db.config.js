require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DBNAME, process.env.USERDB, process.env.DBPASSWORD, {
  host: process.env.HOSTDB,
  dialect: process.env.DIALECTDB,
  pool: {
    max: 50,
    min: 1,
    idle: 10000
  }
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Profile2User = require("../models/profile2user.model")(sequelize, Sequelize)
db.User = require("../models/user.model")(sequelize, Sequelize)
db.Rol = require("../models/rol.model")(sequelize,Sequelize)
db.Profile = require("../models/profile.model")(sequelize,Sequelize)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;