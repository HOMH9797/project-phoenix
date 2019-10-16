const db = require("../database/db.config")
const Prof2usr = db.Profile2User

exports.associateUsrToProfile = async (req, res) => {
    try {
        const { idProf, idUsr } = req.body

        await Prof2usr.create({
            idUser: idUsr,
            idProfile: idProf
        })

        res.status(200).send({ message: "Registro exitoso" })
    } catch (error) {
        res.status(500).send({ error: "Ocurrió un error." })
    }
}