module.exports = function(app){
    const Prof2USR = require("../controllers/prof2usr.controller")
    const Rol = require("../controllers/rol.controller")
    const Profile = require("../controllers/profile.controller")

    app.post("/api/profile", Profile.createProfile)
    app.get("/api/profile",Profile.findAllProfiles)

    app.post("/api/rol", Rol.createRol)

    app.post("/api/profiletouser", Prof2USR.associateUsrToProfile)
}