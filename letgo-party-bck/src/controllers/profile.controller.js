const db = require("../database/db.config")
const Profile = db.Profile

exports.createProfile = async (req, res) => {
    try {
        const { nameProfile, descriptionProfile } = req.body

        await Profile.create({
            nameProfile,
            descriptionProfile
        })

        res.status(200).send({ message: "Registro exitoso" })
    } catch (error) {
        res.status(500).send({ error: "Ocurrió un error." })
    }
}