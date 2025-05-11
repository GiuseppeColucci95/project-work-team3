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
                WHERE slug = ?`

    const categorySlug = req.params.category


    connection.query(sql, categorySlug, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        res.json(results[0])
    })
}


//export the functions
module.exports = {
    index,
    getByName
}