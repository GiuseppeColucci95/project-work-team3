const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
const routers = require("./routers/productsRouters")

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

// middleware

// import routes
app.use('/api/v1', routers)



// middleware per la gestione degli errori