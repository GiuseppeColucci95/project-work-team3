//connection to the database

//funtions to orders controller

function index(req, res) {
    console.log("Hello from the orders controller")
    res.json({ message: "Hello from the orders controller" })
}

//export functions
module.exports = {
    index
}