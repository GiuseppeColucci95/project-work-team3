//conssessione al database

const connection = require('../data/db')

//functions for the promotions controller

function promotionValidate(req, res) {
    //recupero il codice dalla url della chiamata
    const promotionCode = req.params.code

    //variable to query sting
    const sql = `SELECT * FROM promotions
                 WHERE code = ?`

    connection.query(sql, promotionCode, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed validate code' })

        if (results.length === 0) return res.status(404).json({ error: 'Promotion code not found' })

        // Controllo validità della data
        const today = new Date() // today
        const startDate = new Date(results[0].start_date) //start data
        const endDate = new Date(results[0].end_date)

        if (today < startDate || today > endDate) {
            return res.status(400).json({ error: 'Promotion code not valid for today' })
        }

        res.json({ discount_percentage: results[0].discount_percentage })
    })
}

//export the functions
module.exports = {
    promotionValidate
}