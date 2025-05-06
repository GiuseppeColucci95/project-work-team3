const express = require("express")
const router = express.Router()

//index
router.get("/", (req, res) => {
    console.log("Hello from the products router");
    res.json({ message: "Hello from the products router" })
})

//route for products list filtered by tag(pathologies)
router.get("/pathologies/:tag", (req, res) => {
    const { tag } = req.params
    console.log(tag)
    res.json({ message: `Hello from the products router with tag ${tag}` })
})

//route for products list filtered by category
router.get("/categories/:category", (req, res) => {
    const { category } = req.params
    console.log(category)
    res.json({ message: `Hello from the products router with category ${category}` })
})

//route for products list filtered by most recent
router.get("/recent", (req, res) => {
    console.log("recent")
    res.json({ message: "Hello from the products router with recent" })
})

//route for products list filtered by most sold
router.get("/mostsold", (req, res) => {
    console.log("most sold")
    res.json({ message: "Hello from the products router with most sold" })
})

//route for product details
router.get("/product/:slug", (req, res) => {
    const { slug } = req.params
    console.log(slug)
    res.json({ message: `Hello from the products router with slug ${slug}` })
})


module.exports = router