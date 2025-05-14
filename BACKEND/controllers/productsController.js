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
                WHERE tags.slug = ?`
    // Query per i tag
    const sqlTags = `
                    SELECT t.slug, t.name, t.description
                    FROM product_tag pt
                    JOIN tags t ON pt.tag_id = t.id
                    WHERE pt.product_id = ?
                `
    // Query per le categorie
    const sqlCategories = `
                    SELECT c.slug, c.name, c.description
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
                WHERE categories.slug = ?`
    // Query per i tag
    const sqlTags = `
                    SELECT t.slug, t.name, t.description
                    FROM product_tag pt
                    JOIN tags t ON pt.tag_id = t.id
                    WHERE pt.product_id = ?
                `
    // Query per le categorie
    const sqlCategories = `
                    SELECT c.slug, c.name, c.description
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

//route for products list filtered by pattern
function search(req, res) {
    //query to get all products from a given category
    const sql = `SELECT DISTINCT p.*
        FROM products p
        LEFT JOIN product_tag pt ON pt.product_id = p.id
        LEFT JOIN tags t ON t.id = pt.tag_id
        LEFT JOIN category_product cp ON cp.product_id = p.id
        LEFT JOIN categories c ON c.id = cp.category_id
        WHERE p.name LIKE ?
           OR t.name LIKE ?
           OR c.name LIKE ?`

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
    //q&category&tag&orderby&order
    const pattern = req.query.q.toLowerCase()
    const category = req.query.category
    const tag = req.query.tag
    let orderBy = req.query.orderby //price, name, recents
    const order = req.query.order //asc, desc
    const promotion = req.query.promotion //true, false

    console.log(category, tag, orderBy, order, promotion)


    connection.query(sql, [`%${pattern}%`, `%${pattern}%`, `%${pattern}%`], async (err, results) => {
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

        //dichiaro e iniziallizzo un'array per il filtro
        let filteredProducts = products

        //filter by product name
        if (pattern) {
            //primo filter per interare nell'array
            filteredProducts = filteredProducts.filter(product => {
                //qui con la funzione some vado a vedere che ci sia almeno un corrispodenza
                return product.name.toLowerCase().includes(pattern)
            })
        }

        //controllo se esiste un parametro category
        if (category) {
            //primo filter per interare nell'array
            filteredProducts = filteredProducts.filter(product => {
                //qui con la funzione some vado a vedere che ci sia almeno un corrispodenza
                return product.categories.some(cat => cat.name.includes(category))
            })
        }

        if (tag) {
            //primo filter per interare nell'array
            filteredProducts = filteredProducts.filter(product => {
                //qui con la funzione some vado a vedere che ci sia almeno un corrispodenza
                return product.tags.some(cat => cat.name.includes(tag))
            })
        }

        if (order && orderBy) {
            if (orderBy.toLowerCase() === 'recents') orderBy = "created_at"
            filteredProducts.sort((a, b) => {
                let valA = a[orderBy];
                let valB = b[orderBy];

                // Gestione per il campo 'name'
                if (orderBy.toLowerCase() === 'name') {
                    valA = valA.toLowerCase();
                    valB = valB.toLowerCase();
                    if (order.toLowerCase() === 'asc') {
                        return valA.localeCompare(valB)
                    } else {
                        return valB.localeCompare(valA)
                    }
                }

                // Gestione per il campo 'price'
                if (orderBy.toLowerCase() === 'price') {
                    valA = parseFloat(valA);
                    valB = parseFloat(valB);
                }

                // Gestione per il campo 'created_at'
                if (orderBy === 'created_at') {
                    valA = new Date(valA);
                    valB = new Date(valB);
                }

                //gestione dell'ordinamento
                if (order.toLowerCase() === 'asc') {
                    //crescente
                    //ritorna 1 se valA è maggiore di valB quindi valA è un elemento che va messo dopo valB
                    //ritorna -1 se valA è minore di valB quindi valA è un elemento che messo prima di valB
                    //ritorna 0 se valA = valB quindi hanno la stessa grandezza
                    return valA > valB ? 1 : valA < valB ? -1 : 0;
                } else {
                    //descrescente
                    //ritorna 1 se valA è minore di valB quindi valA è un elemento che messo prima di valB
                    //ritorna -1 se valA è maggiore di valB quindi valA è un elemento che va messo dopo valB
                    //ritorna 0 se valA = valB quindi hanno la stessa grandezza
                    return valA < valB ? 1 : valA > valB ? -1 : 0;
                }
            })
        }

        if (promotion) {
            filteredProducts = filteredProducts.filter(product => {
                return product.discount_percentage > 0
            })
        }
        res.json(filteredProducts)
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
                    SELECT t.slug, t.name, t.description
                    FROM product_tag pt
                    JOIN tags t ON pt.tag_id = t.id
                    WHERE pt.product_id = ?
                `
    // Query per le categorie
    const sqlCategories = `
                    SELECT c.slug, c.name, c.description
                    FROM category_product cp
                    JOIN categories c ON cp.category_id = c.id
                    WHERE cp.product_id = ?
                `

    const { slug } = req.params
    let product = {}
    connection.query(sql, slug, async (err, result) => {
        if (err) return res.status(500).json({ error: 'Database query failed' })
        if (result.length === 0) return res.status(404).json({ error: 'Product not found' })


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
    search,
    recents,
    bestSellers,
    getProduct
}