module.exports = (sequelize, Sequelize) => {
    const Profile2User = sequelize.define("Profile2User", {
        idProfile2User: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            type: Sequelize.INTEGER
        },
        idProfile: {
            type: Sequelize.INTEGER
        }
    })
    Profile2User.associate = (models) => {
        Profile2User.belongsTo(models.Profile, { onDelete: "CASCADE", foreignKey: "idProfile" })
        Profile2User.belongsTo(models.User, { onDelete: "CASCADE", foreignKey: "idUser" })
    }
    return Profile2User
}