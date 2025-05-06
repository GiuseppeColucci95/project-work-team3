const express = require("express")
const router = express.Router()

//index (read)
router.get("/", (req, res) => {
    console.log("Hello from the products router");
    res.json({ message: "Hello from the products router" })
})

//router for products list filtered by tag(pathologies)
router.get("/pathologies/:tag", (req, res) => {
    const { tag } = req.params
    console.log(tag)
    res.json({ message: `Hello from the products router with tag ${tag}` })
})

//router for products list filtered by category
router.get("/categories/:category", (req, res) => {
    const { category } = req.params
    console.log(category)
    res.json({ message: `Hello from the products router with category ${category}` })
})

//router for product details
router.get("/product/:slug", (req, res) => {
    const { slug } = req.params
    console.log(slug)
    res.json({ message: `Hello from the products router with slug ${slug}` })
})


module.exports = router