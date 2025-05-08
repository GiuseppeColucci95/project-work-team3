//import functions
const { orderValidate, userValidate } = require('../Functions/Validate.js')

//connection to the database

//funtions to orders controller


function create(req, res) {

    const order = req.body

    const { promotion_id,
        total_not_discounted,
        total_discounted,
        shipping,
        final_price,
        status,
        products,
        first_name,
        last_name,
        phone,
        mail,
        address } = order



    //validate order data
    const errorList = userValidate(order)

    if (Object.keys(errorList).length > 0) {
        return res.status(422).json({ errors: errorList })
    }

    // variable of query

    console.log(`Creating order for user ${order.first_name} with data: `, order)
    res.json({ message: `Creating order for user ${first_name} with data: ${order}` })

}


//export functions
module.exports = {
    create
}