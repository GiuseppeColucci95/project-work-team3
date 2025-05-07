// imports
const express = require("express")
const productsRouters = express.Router()
const productsController = require("../controllers/productsController")

//routes

//index
productsRouters.get("/", productsController.index)

//route for products list filtered by tag(pathologies)
productsRouters.get("/pathologies/:tag", productsController.filterByTag)

//route for products list filtered by category
productsRouters.get("/categories/:category", productsController.filterByCategory)

//route for products list filtered by most recent
productsRouters.get("/recent", productsController.Recent)

//route for products list filtered by best sellers
productsRouters.get("/best-sellers", productsController.bestSellers)

//route for product details
productsRouters.get("/:slug", productsController.getProductDetails)

module.exports = productsRouters