const express = require("express")
const ordersRouters = express.Router()

//index
ordersRouters.get("/", (req, res) => {
    console.log("Hello from the orders router")
    res.json({ message: "Hello from the orders router" })
})

module.exports = ordersRouters