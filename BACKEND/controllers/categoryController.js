const connection = require('../data/db')


// function index
function index(req, res) {
    const sql = `SELECT * FROM categories`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        res.json(results)
    })
}

//show
function getByName(req, res) {

    const sql = `SELECT * FROM categories
                WHERE name = ?`

    const categoryName = req.params.category


    connection.query(sql, categoryName, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        res.json(results[0])
    })
}


//export the functions
module.exports = {
    index,
    getByName
}