const{Sequelize, DataTypes} = require("sequelize")

const database = new Sequelize(
    `postgres://postgres:ama12@localhost:5432/gestionacademica`
);

database.define("Student",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type:DataTypes.ENUM('male','famale'),
        allowNull: false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    }
    
});

module.exports = {database};