//connection on the database

//functions to products controller

function index(req, res) {

    //query to get all products from products table
    const sql = `SELECT * FROM products`;

    console.log("Hello from the products controller")
    res.json({ message: "Hello from the products controller" })
}

//route for products list filtered by tag(pathologies)
function filterByTag(req, res) {

    //query to get all products from a given tag
    const sql = `SELECT products.* FROM products
    JOIN product_tag ON product_tag.product_id = products.id
    JOIN tags ON tags.id = product_tag.tag_id
    WHERE tags.name = 'nut_free'`;

    const { tag } = req.params
    console.log(tag)
    res.json({ message: `Hello from the products controller with tag ${tag}` })
}

//route for products list filtered by category
function filterByCategory(req, res) {

    //query to get all products from a given category
    const sql = `SELECT products.* FROM products 
    JOIN category_product ON category_product.product_id = products.id
    JOIN categories ON categories.id = category_product.category_id
    WHERE categories.name = ?`;

    const { category } = req.params
    console.log(category)
    res.json({ message: `Hello from the products controller with category ${category}` })
}

//route for products list filtered by most recent
function recents(req, res) {

    //query to get all recents products from products table
    const sql = `SELECT * FROM products ORDER BY inserted_at DESC`;

    console.log("recent")
    res.json({ message: "Hello from the products controller with recent" })
}

//route for products list filtered by best sellers
function bestSellers(req, res) {

    //query to get best sellers products
    const sql = `SELECT COUNT(product_id), products.* FROM products 
            JOIN order_product ON order_product.product_id = products.id 
            GROUP BY order_product.product_id 
            ORDER BY COUNT(product_id)`;

    console.log("most sold")
    res.json({ message: "Hello from the products controller with most sold" })
}

//route for product details
function getProduct(req, res) {

    //query to get a single product from products table
    const sql = `SELECT * FROM products WHERE slug = ?`;

    const { slug } = req.params
    console.log(slug)
    res.json({ message: `Hello from the products controller with slug ${slug}` })
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