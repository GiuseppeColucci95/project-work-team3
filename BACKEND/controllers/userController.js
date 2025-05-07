//connessione al db

//funzioni controller for user

function index(req, res) {
    console.log("Hello from userController index")
    res.send("Hello from userController index")
}


module.exports = {
    index
}