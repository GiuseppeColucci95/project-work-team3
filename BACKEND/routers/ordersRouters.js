//imports
const express = require("express")
const ordersRouters = express.Router()
const ordersController = require("../controllers/ordersController")

//routes

//index
ordersRouters.get("/", ordersController.index)

module.exports = ordersRouters