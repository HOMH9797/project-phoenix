module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        idUser:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        nameUser:{
            type:Sequelize.STRING,
            require:true
        },
        emailUser:{
            type:Sequelize.STRING,
            require:true
        },
        passwordUser:{
            type:Sequelize.STRING,
            require:true
        },
        edadUser:{
            type: Sequelize.DATE
        }
    })
    return User
}