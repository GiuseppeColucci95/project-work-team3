//imports
const express = require("express")
const ordersRouters = express.Router()
const ordersController = require("../controllers/ordersController")

//routes

//create
ordersRouters.post("/", ordersController.create)

module.exports = ordersRouters