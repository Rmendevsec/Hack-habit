const express = require("express")
const sequelize = require("./db")
const cors = require("cors")
const path = require("path")
const database =  require("./db")
const User = require("./models/user")
const jwt = require("jsonwebtoken")
const relation = require("./relations")
database.sync()
const fs = require("fs")
const {formidable} = require("formidable")
const PORT = process.env.PORT || 5000
const app = express()


app.use(express.json())

sequelize.sync({alert:true}).then(()=>{
    console.log("All modules synced")
})

app.listen(PORT, ()=>{
    console.log("Server is running on port", PORT)
})

app.post("/users", async(req, res)=>{
    const {id,name,email, password} = req.body
    try{
        const user = await User.create({id,name,email, password})
        res.json(user)
    }
    catch (err){
        res.status(500).json(err)
    }
})













