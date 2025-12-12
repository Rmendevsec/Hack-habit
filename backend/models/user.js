const {DataTypes} = require("sequelize")
const sequelize = require("../db.config")

const User = sequelize.define("user", {
    id:{
        type: DataTypes.INTEGER,
        primaryKay: true,
        autoIncrement: true
    },
    name:{ 
        type:DataTypes.STRING,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{ 
        type:DataTypes.STRING,
    allowNull:false
},
    

})

module.exports = User