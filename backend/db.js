const {Sqquelize, Sequelize} = require("sequelize")

const sequelize = new Sequelize({
    dialect: "sqlite",
    host:"./db.sqlite"

})

const connectDB = async ()=>{
    sequelize.sync()

    await sequelize.authenticate()
    console.log("Conected to DB".yellow.underline)

}

module.exports = {sequelize, connectDB}