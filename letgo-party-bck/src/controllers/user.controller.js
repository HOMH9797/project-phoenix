const db = require("../database/db.config")
const Op = db.Sequelize.Op
const Users = db.User
const Profiles = db.Profile
const Prof2usr = db.Profile2User
const bcrypt = require("bcrypt")

exports.createUser = async (req, res) => {
    try {

        const { name, email, password, datebirth } = req.body

        await Users.create({
            nameUser: name,
            emailUser: email,
            passwordUser: bcrypt.hashSync(password, 10),
            dateBirth: datebirth
        })

        res.status(200).send({ message: "Registro exitoso" })
    } catch (error) {
        res.status(500).send({ error: "Ocurrió un error." })
    }
}

exports.findUserToProfile = async (req, res) => {
    try {
        const idProfile = req.params.profile

        let userResult = await Prof2usr.findAll({
            attributes: [],
            include: [
                {
                    model: Users,
                    attributes: ["nameUser", "emailUser"],
                }, {
                    model: Profiles,
                    attributes: [],
                    where: { idProfile }
                }
            ],
            raw: true
        })

        res.status(200).send({ userResult, estado: 'ok' })

    } catch (error) {
        res.status(500).send({ error: "Ocurrió un error." })
    }
}

exports.filterUsersToName = async (req, res) => {
    try {
        const { name } = req.params
        let resultSearch = ''

        resultSearch = await Users.findAll({
            where: {
                nameUser: { [Op.like]: `%${name}%` }
            }
        })

        res.status(200).send({ resultSearch })

    } catch (error) {
        res.status(500).send({ error: "Ocurrió un error." })
    }
}

exports.findUsers = async (req, res) => {
    try {
        let resultSearch = ''

        resultSearch = await Users.findAll()

        res.status(200).send({ resultSearch })

    } catch (error) {
        res.status(500).send({ error: "Ocurrió un error." })
    }
}