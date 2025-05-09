//connection on the database
const connection = require('../data/db')

// variable to path
const url_base_image = "http://localhost:3000/images/"

//functions to products controller

function index(req, res) {

    //query to get all products from products table
    const sql = `SELECT * FROM products`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        /**
         * * Map through the results and update the image URL for each product
         * * This assumes that the image field in the database contains the image filename
         */
        const products = results.map(product => {
            const url_image = `${url_base_image}${product.image}`
            product.image = url_image
            return product
        })

        res.json(products)
    })
}

//route for products list filtered by tag(pathologies)
function filterByTag(req, res) {

    //query to get all products from a given tag
    const sql = `SELECT products.* FROM products
    JOIN product_tag ON product_tag.product_id = products.id
    JOIN tags ON tags.id = product_tag.tag_id
    WHERE tags.name = ?`

    const { tag } = req.params

    connection.query(sql, tag, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        /**
         * * Map through the results and update the image URL for each product
         * * This assumes that the image field in the database contains the image filename
         */
        const products = results.map(product => {
            const url_image = `${url_base_image}${product.image}`
            product.image = url_image
            return product
        })

        res.json(products)
    })

}

//route for products list filtered by category
function filterByCategory(req, res) {

    //query to get all products from a given category
    const sql = `SELECT products.* FROM products 
    JOIN category_product ON category_product.product_id = products.id
    JOIN categories ON categories.id = category_product.category_id
    WHERE categories.name = ?`

    const { category } = req.params
    connection.query(sql, category, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        /**
         * * Map through the results and update the image URL for each product
         * * This assumes that the image field in the database contains the image filename
         */
        const products = results.map(product => {
            const url_image = `${url_base_image}${product.image}`
            product.image = url_image
            return product
        })

        res.json(products)
    })
}

//route for products list filtered by most recent
function recents(req, res) {

    //query to get all recents products from products table
    const sql = `SELECT * FROM products ORDER BY created_at DESC`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        /**
         * * Map through the results and update the image URL for each product
         * * This assumes that the image field in the database contains the image filename
         */
        const products = results.map(product => {
            const url_image = `${url_base_image}${product.image}`
            product.image = url_image
            return product
        })

        res.json(products)
    })
}

//route for products list filtered by best sellers
function bestSellers(req, res) {

    //query to get best sellers products
    const sql = `SELECT COUNT(product_id), products.* FROM products 
            JOIN order_product ON order_product.product_id = products.id 
            GROUP BY order_product.product_id 
            ORDER BY COUNT(product_id) DESC`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        /**
         * * Map through the results and update the image URL for each product
         * * This assumes that the image field in the database contains the image filename
         */
        const products = results.map(product => {
            const url_image = `${url_base_image}${product.image}`
            product.image = url_image
            return product
        })

        res.json(products)
    })

}

//route for product details
function getProduct(req, res) {

    //query to get a single product from products table
    const sql = `SELECT * FROM products WHERE slug = ?`;

    const { slug } = req.params
    connection.query(sql, slug, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        /**
         * * Map through the results and update the image URL for each product
         * * This assumes that the image field in the database contains the image filename
         */
        const products = results.map(product => {
            const url_image = `${url_base_image}${product.image}`
            product.image = url_image
            return product
        })

        res.json(products)
    })
}

//export functions
module.exports = {
    index,
    filterByTag,
    filterByCategory,
    recents,
    bestSellers,
    getProduct
}