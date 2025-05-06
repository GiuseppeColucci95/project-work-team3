const express = require("express")
const usersRouters = express.Router()

//index
usersRouters.get("/", (req, res) => {
    console.log("Hello from the users router")
    res.json({ message: "Hello from the users router" })
})

module.exports = usersRouters