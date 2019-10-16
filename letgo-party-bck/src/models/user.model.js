module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        idUser: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imgUser:{
            type: Sequelize.STRING,
            allowNull:true
        },
        nameUser: {
            type: Sequelize.STRING,
            require: true
        },
        emailUser: {
            type: Sequelize.STRING,
            require: true
        },
        passwordUser: {
            type: Sequelize.STRING,
            require: true
        },
        dateBirth: {
            type: Sequelize.DATE
        }
    }, {
        freezeTableName: true
    })
    User.associate = (models) => {
        User.hasMany(models.Profile2User, { onDelete: "CASCADE", foreignKey: "idUser" })
    }
    return User
}