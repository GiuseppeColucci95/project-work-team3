const express = require("express")
const promotionsRouters = express.Router()

//index
promotionsRouters.get("/", (req, res) => {
    console.log("Hello from the promotions router")
    res.json({ message: "Hello from the promotions router" })
})

module.exports = promotionsRouters