module.exports = function(app){
    const User = require("../controllers/user.controller");
    app.post("/api/user", User.createUser)
    app.post("/api/finduser", User.findUsers)
    app.get("/api/findUserToProfile/:profile",User.findUserToProfile)
}