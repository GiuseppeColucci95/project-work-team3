/* 
first_name
last_name
phone
mail
address
*/

function orderValidate(order) { }

/** function to validate user data
 * @param {Object} user // user object to validate
 * @returns {Object} // returns true if valid, false otherwise
 */
function userValidate(user) {

    let validate = {}

    const { first_name, last_name, mail, address } = user

    // check to see if the user object is empty
    if (!first_name) validate.first_name = "first name is required"
    if (!last_name) validate.last_name = "last name is required"
    if (!mail) validate.mail = "email is required"
    if (!address) validate.address = "address is required"

    // check to see if the user object is a string
    if (typeof first_name !== 'string') validate.first_name = "first name must be a string"
    if (typeof last_name !== 'string') validate.last_name = "last name must be a string"
    if (typeof mail !== 'string') validate.mail = "email must be a string"
    if (typeof address !== 'string') validate.address = "address must be a string"

    // check to see if the user object ia a regular length
    if (first_name.length < 3) validate.first_name = "first name must be at least 3 characters long"
    if (first_name.length > 20) validate.first_name = "first name must be at most 20 characters long"
    if (last_name.length < 3) validate.last_name = "last name must be at least 3 characters long"
    if (last_name.length > 20) validate.last_name = "last name must be at most 20 characters long"
    if (mail.length < 10) validate.mail = "email must be at least 10 characters long"
    if (mail.length > 50) validate.mail = "email must be at most 50 characters long"
    if (address.length < 15) validate.address = "address must be at least 15 characters long"
    if (address.length > 50) validate.address = "address must be at most 50 characters long"

    // check to see if the user object is a valid email
    if (!mail.includes('@')) validate.mail = "email must be a valid email, missing @"
    if (!mail.includes('.')) validate.mail = "email must be a valid email, missing ."
    if (mail.indexOf('@') === 0) validate.mail = "email must be a valid email, @ must not be the first character"
    if (mail.indexOf('.') === 0) validate.mail = "email must be a valid email, . must not be the first character"

    const beforeAt = mail.substring(0, mail.indexOf('@'))
    const afterAt = mail.substring(mail.indexOf('@') + 1, mail.length)

    if (beforeAt.length < 3) validate.mail = "email must be a valid email, before @ must be at least 3 characters long"
    if (!afterAt.indexOf('.')) validate.mail = "email must be a valid email, missing . after @"
    if (afterAt.indexOf('.') === 0) validate.mail = "email must be a valid email, . must not be the first character after @"

    // check to see if the user object is a valid address
    //"Via Roma 123, 00100 Roma, Italia"
    // in street vado a inserire la sottostringa prima della prima virgola
    // in cap vado a inserire la sottostringa formata da 5 caratteri dopo la prima virgola escludendo lo spazio
    // in city vado a inserire la sottostringa presente dopo la seconda virgola escludendo lo spazio
    const street = address.substring(0, address.indexOf(','))
    const cap = address.substring(address.indexOf(',') + 1, address.indexOf(',') + 1 + 5)
    const city = address.substring(address.indexOf(',') + 6, address.indexOf(',', address.indexOf(',') + 1))
    const country = address.substring(address.indexOf(',', address.indexOf(',') + 1) + 1, address.length)

    // check to see if the user object is a valid address
    if (!street) validate.address = "street is required"
    if (!cap) validate.address = "cap is required"
    if (!city) validate.address = "city is required"
    if (!country) validate.address = "country is required"

    if (!street.toLowerCase().includes('via') && !street.toLowerCase().includes('piazza')) validate.address = "address must contain via or piazza"

    if (cap.length !== 5) validate.address = "cap invalid"

    return validate
}


//exports functions
module.exports = {
    orderValidate,
    userValidate
}