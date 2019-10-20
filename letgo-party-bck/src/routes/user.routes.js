module.exports = function(app){
    const User = require("../controllers/user.controller");
    app.post("/api/user", User.createUser)
    app.get("/api/finduser/", User.findUsers)
    app.get("/api/filterUsersToName/:name", User.filterUsersToName)
    app.get("/api/findUserToProfile/:profile",User.findUserToProfile)
}