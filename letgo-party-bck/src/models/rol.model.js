module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("Rol", {
        idRol: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameRol: {
            type: Sequelize.STRING(3),
            unique: true,
            allowNull: false
        },
        descriptionRol: {
            type: Sequelize.STRING,
            allowNull: false
        }

    }, {
        freezeTableName: true
    })

    return Rol
}