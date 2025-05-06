const express = require("express")
const wishlistRouters = express.Router()

//index
wishlistRouters.get("/", (req, res) => {
    console.log("Hello from the wishlist router")
    res.json({ message: "Hello from the wishlist router" })
})

module.exports = wishlistRouters