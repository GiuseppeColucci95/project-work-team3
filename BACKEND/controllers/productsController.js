//connection on the database
const connection = require('../data/db')

// variable to path
const url_base_image = "http://localhost:3000/images/"

//functions to products controller

function index(req, res) {

    //query to get all products from products table
    const sql = `SELECT * FROM products`
    // Query per i tag
    const sqlTags = `
                    SELECT t.name, t.description
                    FROM product_tag pt
                    JOIN tags t ON pt.tag_id = t.id
                    WHERE pt.product_id = ?
                `
    // Query per le categorie
    const sqlCategories = `
                    SELECT c.name, c.description
                    FROM category_product cp
                    JOIN categories c ON cp.category_id = c.id
                    WHERE cp.product_id = ?
                `

    connection.query(sql, async (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        // Usa Promise.all per gestire le query asincrone
        const products = await Promise.all(results.map(product => {
            return new Promise((resolve, reject) => {
                connection.query(sqlTags, [product.id], (err, tags) => {
                    if (err) return reject(err)
                    connection.query(sqlCategories, [product.id], (err, categories) => {
                        if (err) return reject(err)
                        product.image = `${url_base_image}${product.image}`
                        product.tags = tags
                        product.categories = categories
                        resolve(product)
                    })
                })
            })
        }))

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
    // Query per i tag
    const sqlTags = `
                    SELECT t.name, t.description
                    FROM product_tag pt
                    JOIN tags t ON pt.tag_id = t.id
                    WHERE pt.product_id = ?
                `
    // Query per le categorie
    const sqlCategories = `
                    SELECT c.name, c.description
                    FROM category_product cp
                    JOIN categories c ON cp.category_id = c.id
                    WHERE cp.product_id = ?
                `

    const { tag } = req.params

    connection.query(sql, tag, async (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        // Usa Promise.all per gestire le query asincrone
        const products = await Promise.all(results.map(product => {
            return new Promise((resolve, reject) => {
                connection.query(sqlTags, [product.id], (err, tags) => {
                    if (err) return reject(err)
                    connection.query(sqlCategories, [product.id], (err, categories) => {
                        if (err) return reject(err)
                        /**
                          This assumes that the image field in the database contains the image filename
                         */
                        product.image = `${url_base_image}${product.image}`
                        product.tags = tags
                        product.categories = categories
                        resolve(product)
                    })
                })
            })
        }))


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
    // Query per i tag
    const sqlTags = `
                    SELECT t.name, t.description
                    FROM product_tag pt
                    JOIN tags t ON pt.tag_id = t.id
                    WHERE pt.product_id = ?
                `
    // Query per le categorie
    const sqlCategories = `
                    SELECT c.name, c.description
                    FROM category_product cp
                    JOIN categories c ON cp.category_id = c.id
                    WHERE cp.product_id = ?
                `

    const { category } = req.params
    connection.query(sql, category, async (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        // Usa Promise.all per gestire le query asincrone
        const products = await Promise.all(results.map(product => {
            return new Promise((resolve, reject) => {
                connection.query(sqlTags, [product.id], (err, tags) => {
                    if (err) return reject(err)
                    connection.query(sqlCategories, [product.id], (err, categories) => {
                        if (err) return reject(err)
                        /**
                          This assumes that the image field in the database contains the image filename
                         */
                        product.image = `${url_base_image}${product.image}`
                        product.tags = tags
                        product.categories = categories
                        resolve(product)
                    })
                })
            })
        }))

        res.json(products)
    })
}

//route for products list filtered by most recent
function recents(req, res) {

    //query to get all recents products from products table
    const sql = `SELECT * FROM products ORDER BY created_at DESC`
    // Query per i tag
    const sqlTags = `
                    SELECT t.name, t.description
                    FROM product_tag pt
                    JOIN tags t ON pt.tag_id = t.id
                    WHERE pt.product_id = ?
                `
    // Query per le categorie
    const sqlCategories = `
                    SELECT c.name, c.description
                    FROM category_product cp
                    JOIN categories c ON cp.category_id = c.id
                    WHERE cp.product_id = ?
                `

    connection.query(sql, async (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        // Usa Promise.all per gestire le query asincrone
        const products = await Promise.all(results.map(product => {
            return new Promise((resolve, reject) => {
                connection.query(sqlTags, [product.id], (err, tags) => {
                    if (err) return reject(err)
                    connection.query(sqlCategories, [product.id], (err, categories) => {
                        if (err) return reject(err)
                        /**
                          This assumes that the image field in the database contains the image filename
                         */
                        product.image = `${url_base_image}${product.image}`
                        product.tags = tags
                        product.categories = categories
                        resolve(product)
                    })
                })
            })
        }))

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
    // Query per i tag
    const sqlTags = `
                    SELECT t.name, t.description
                    FROM product_tag pt
                    JOIN tags t ON pt.tag_id = t.id
                    WHERE pt.product_id = ?
                `
    // Query per le categorie
    const sqlCategories = `
                    SELECT c.name, c.description
                    FROM category_product cp
                    JOIN categories c ON cp.category_id = c.id
                    WHERE cp.product_id = ?
                `

    connection.query(sql, async (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        // Usa Promise.all per gestire le query asincrone
        const products = await Promise.all(results.map(product => {
            return new Promise((resolve, reject) => {
                connection.query(sqlTags, [product.id], (err, tags) => {
                    if (err) return reject(err)
                    connection.query(sqlCategories, [product.id], (err, categories) => {
                        if (err) return reject(err)
                        /**
                          This assumes that the image field in the database contains the image filename
                         */
                        product.image = `${url_base_image}${product.image}`
                        product.tags = tags
                        product.categories = categories
                        resolve(product)
                    })
                })
            })
        }))

        res.json(products)
    })

}

//route for product details
function getProduct(req, res) {

    //query to get a single product from products table
    const sql = `SELECT * FROM products WHERE slug = ?`
    // Query per i tag
    const sqlTags = `
                    SELECT t.name, t.description
                    FROM product_tag pt
                    JOIN tags t ON pt.tag_id = t.id
                    WHERE pt.product_id = ?
                `
    // Query per le categorie
    const sqlCategories = `
                    SELECT c.name, c.description
                    FROM category_product cp
                    JOIN categories c ON cp.category_id = c.id
                    WHERE cp.product_id = ?
                `

    const { slug } = req.params
    let product = {}
    connection.query(sql, slug, async (err, result) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })

        product = result[0]

        await new Promise((resolve, reject) => {
            connection.query(sqlTags, [product.id], (err, tags) => {
                if (err) return reject(err)
                connection.query(sqlCategories, [product.id], (err, categories) => {
                    if (err) return reject(err)
                    /**
                      This assumes that the image field in the database contains the image filename
                     */
                    product.image = `${url_base_image}${product.image}`
                    product.tags = tags
                    product.categories = categories
                    resolve(product)
                })
            })
        })
        //return the result
        res.json(product)
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