const connection = require('../data/db')

const url_base_image = "http://localhost:3000/images/"


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
        if (results.length === 0) return res.status(404).json({ error: 'Category not found' })

        const category = results[0]
        category.image = `${url_base_image}${category.image}`

        res.json(category)
    })
}


//export the functions
module.exports = {
    index,
    getByName
}