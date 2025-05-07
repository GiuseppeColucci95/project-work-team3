//imports
const express = require("express")
const usersRouters = express.Router()
const usersController = require("../controllers/userController")

//routes

//index
usersRouters.get("/", usersController.index)

module.exports = usersRouters