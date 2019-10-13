const db = require("../database/db.config")
const Rol = db.Rol

exports.createRol = async (req, res) => {
    try {
        const { nameRol, descriptionRol } = req.body

        await Rol.create({
            nameRol,
            descriptionRol
        })

        res.status(200).send({ message: "Registro exitoso" })
    } catch (error) {
        res.status(500).send({ error: "Ocurrió un error." })
    }
}