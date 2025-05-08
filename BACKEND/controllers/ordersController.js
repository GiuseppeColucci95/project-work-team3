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
    const errorOrderList = orderValidate(order)
    const errorUserList = userValidate(order)

    if (Object.keys(errorUserList).length > 0) {
        return res.status(422).json(errorUserList)
    }
    if (Object.keys(errorOrderList).length > 0) {
        return res.status(422).json(errorOrderList)
    }

    // variable of query

    console.log(`Creating order for user ${order.first_name} with data: `, order)
    res.json({ message: `Creating order for user ${first_name} with data: ${order}` })

}


//export functions
module.exports = {
    create
}