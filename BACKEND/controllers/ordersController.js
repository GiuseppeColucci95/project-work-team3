//import functions
const { orderValidate, userValidate } = require('../functions/validate.js')
const sendOrderConfirmationMail = require('../functions/sendOrderConfirmationMail.js')

//connection to the database

const connection = require('../data/db')

//funtions to orders controller


function create(req, res) {

    const order = req.body

    console.log(order)


    //query to insert an element into orders tables
    const insertOrder = `INSERT INTO orders (promotion_id, firstname, lastname, mail, phone, address, total_not_discounted, total_discounted, shipping, final_price, status, created_at)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`

    const insertOrderProduct = `INSERT INTO order_product (order_id, product_id, quantity)
    VALUES (?, ?, ?)`

    const { promotion_id,
        total_not_discounted,
        total_discounted,
        shipping,
        final_price,
        status,
        products,
        firstname,
        lastname,
        phone,
        mail,
        address } = order

    //validate order data
    const errorOrderList = orderValidate(order)
    const errorUserList = userValidate(order)

    if (Object.keys(errorUserList).length > 0) {
        return res.status(422).json(errorUserList)
    }
    if (Object.keys(errorOrderList).length > 0) {
        return res.status(422).json(errorOrderList)
    }

    // variable of query

    connection.query(insertOrder, [promotion_id, firstname, lastname, mail, phone.replaceAll(' ', ''), address, total_not_discounted, total_discounted, shipping, final_price, status], (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: 'Database query failed insert order' })
        }

        const order_id = results.insertId

        // Crea un array di Promises per inserire i prodotti
        //le promiss sono oggetti che mi permettono di gestire funzioni asincrone
        const insertProductPromises = products.map(product => {
            return new Promise((resolve, reject) => {
                connection.query(insertOrderProduct, [order_id, product.product_id, product.quantity], (err, result) => {
                    if (err) return reject(err)
                    resolve(result.insertId)
                })
            })
        })

        // Attendi che tutte le query siano completate
        // con la funzione promise.all ciclo all'intero dell'array di promise per andare a gestire ogni singola promise
        Promise.all(insertProductPromises)
            .then(async inseredOrderProduct => {
                try {
                    await sendOrderConfirmationMail(order, order_id)
                } catch (mailErr) {
                    // Log dell'errore, ma non blocca la risposta
                    console.error('Errore invio mail:', mailErr)
                    res.status(500).json({ error: 'filled send mail' })
                }
                console.log("order confirmed")

                res.status(201).json({ message: 'order and order_products created successfully ', orderId: order_id })
            })
            .catch(() => {
                res.status(500).json({ error: 'Database query failed insert order_products' })
            })
    })

}


//export functions
module.exports = {
    create
}