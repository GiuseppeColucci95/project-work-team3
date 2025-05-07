//connection on the database

//functions to products controller

function index(req, res) {
    console.log("Hello from the products controller")
    res.json({ message: "Hello from the products controller" })
}

//route for products list filtered by tag(pathologies)
function filterByTag(req, res) {
    const { tag } = req.params
    console.log(tag)
    res.json({ message: `Hello from the products controller with tag ${tag}` })
}

//route for products list filtered by category
function filterByCategory(req, res) {
    const { category } = req.params
    console.log(category)
    res.json({ message: `Hello from the products controller with category ${category}` })
}

//route for products list filtered by most recent
function Recent(req, res) {
    console.log("recent")
    res.json({ message: "Hello from the products controller with recent" })
}

//route for products list filtered by best sellers
function bestSellers(req, res) {
    console.log("most sold")
    res.json({ message: "Hello from the products controller with most sold" })
}

//route for product details
function getProduct(req, res) {
    const { slug } = req.params
    console.log(slug)
    res.json({ message: `Hello from the products controller with slug ${slug}` })
}


//export functions
module.exports = {
    index,
    filterByTag,
    filterByCategory,
    Recent,
    bestSellers,
    getProduct
}
