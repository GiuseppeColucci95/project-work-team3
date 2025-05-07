//imports
const express = require("express")
const usersRouters = express.Router()
const usersController = require("../controllers/usersController")

//routes

//index
usersRouters.get("/", usersController.index)

module.exports = usersRouters