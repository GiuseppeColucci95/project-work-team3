const express = require("express")
const app = express()
const cors = require("cors")
const port = 3000;

//attivo i permessi cors per il frontend in localhost
app.use(cors({ origin: 'http://localhost:5173' }))

//preparo il server a ricevere dati in formato json
app.use(express.json())

// open server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

// import routes

// middleware
