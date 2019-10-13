module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define("Profile", {
        idProfile: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameProfile: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        descriptionProfile: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Rol_Profile: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'a'
        }
    }, {
        freezeTableName: true
    })
    Profile.associate = (models) => {
        Profile.hasMany(models.Profile2User, { onDelete: "CASCADE", foreignKey: "idProfile" })
    }
    return Profile
}