//imports
const express = require("express")
const promotionsRouters = express.Router()
const promotionsController = require("../controllers/promotionsController")

//routes

//index
promotionsRouters.get("/", promotionsController.index)

module.exports = promotionsRouters