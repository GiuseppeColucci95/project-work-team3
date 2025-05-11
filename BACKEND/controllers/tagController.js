//conssessione al database

const connection = require('../data/db')

function index(req, res) {


}

function getByName(req, res) {

    const sql = `SELECT * FROM tags
                WHERE name = ?`



}


//export the functions
module.exports = {
    index,
    getByName
}