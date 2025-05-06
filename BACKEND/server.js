// *****************
// imports

// import express
const express = require("express")
const app = express()
// import cors
const cors = require("cors")

// import routes
const productsRouters = require("./routers/productsRouters")
const ordersRouters = require("./routers/ordersRouters")
const usersRouters = require("./routers/userRouters")
const wishlistRouters = require("./routers/wishlistRouters")

// create a server variable
const port = 3000

// *****************
// middleware

//attivo i permessi cors per il frontend in localhost
app.use(cors({ origin: 'http://localhost:5173' }))

//preparo il server a ricevere dati in formato json
app.use(express.json())

//using static foulder
app.use(express.static('public'))

// open server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

// use routes
app.use('/api/v1/products', productsRouters)
app.use('/api/v1/orders', ordersRouters)
app.use('/api/v1/users', usersRouters)
app.use('/api/v1/wishlist', wishlistRouters)


// middleware per la gestione degli errori