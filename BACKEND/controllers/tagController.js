//conssessione al database

const connection = require('../data/db')

const url_base_image = "http://localhost:3000/images/"


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
                WHERE slug = ?`

    const tagSlug = req.params.tag


    connection.query(sql, tagSlug, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        if (results.length === 0) return res.status(404).json({ error: 'Tag not found' })

        const tags = results[0]
        tags.image = `${url_base_image}${tags.image}`

        res.json(tags)
    })
}


//export the functions
module.exports = {
    index,
    getByName
}