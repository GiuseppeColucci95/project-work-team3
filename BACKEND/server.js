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
const promotionsRouters = require("./routers/promotionsRouters")
const tagRouters = require("./routers/tagRouters")
const categoryRouters = require("./routers/categoryRouters")

// create a server variable
const port = 3000

// *****************
// middleware

//importing the error middelware
const serverError = require('./middelware/serverError')

const notFound = require('./middelware/notFound')

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
app.use('/api/v1/promotions', promotionsRouters)
app.use('/api/v1/tags', tagRouters)
app.use('/api/v1/categories', categoryRouters)



// middleware per la gestione degli errori
app.use(serverError)

app.use(notFound)