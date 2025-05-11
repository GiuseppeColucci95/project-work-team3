// imports
const express = require("express")
const tagRouters = express.Router()
const tagController = require("../controllers/tagController")

//index
tagRouters.get("/", tagController.index)

//show
tagRouters.get("/:tag", tagController.getByName)


//export the functions
module.exports = tagRouters
