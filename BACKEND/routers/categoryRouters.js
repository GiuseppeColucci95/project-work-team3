// imports
const express = require("express")
const categoryRouters = express.Router()
const categoryController = require("../controllers/categoryController")

//index
categoryRouters.get("/", categoryController.index)

//show
categoryRouters.get("/:category", categoryController.getByName)


//export the functions
module.exports = categoryRouters