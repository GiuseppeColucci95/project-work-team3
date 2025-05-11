//conssessione al database

const connection = require('../data/db')


// function index
function index(req, res) {
    const sql = `SELECT * FROM tags`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        res.json(results)
    })
}

//show
function getByName(req, res) {

    const sql = `SELECT * FROM tags
                WHERE name = ?`

    const tagName = req.params.tag


    connection.query(sql, tagName, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        res.json(results[0])
    })
}


//export the functions
module.exports = {
    index,
    getByName
}