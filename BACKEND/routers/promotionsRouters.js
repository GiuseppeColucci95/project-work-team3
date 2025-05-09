//imports
const express = require("express")
const promotionsRouters = express.Router()
const promotionsController = require("../controllers/promotionsController")

//routes

//index
promotionsRouters.post("/:code", promotionsController.promotionValidate)

module.exports = promotionsRouters