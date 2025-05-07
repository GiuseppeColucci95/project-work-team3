//conssessione al database

//functions for the promotions controller

function index(req, res) {
    console.log("Hello from the promotions controller")
    res.json({ message: "Hello from the promotions controller" })
}

//export the functions
module.exports = {
    index
}