module.exports = function(app){
    const User = require("../controllers/user.controller");
    app.post("/api/user", User.createUser)
    app.get("/api/user", User.findUsers)
}