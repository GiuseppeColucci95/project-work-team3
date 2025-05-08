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

    /**
     * check to see if the user object is a valid email
     * nel controllo uso una regular expression per controllare che l'email sia valida
     * /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/ è una regular expression che controlla che l'email sia valida
     * [a-zA-Z0-9._%+-] è una regular expression che identifica una stringa composta da lettere maiuscole e minuscole, numeri e i caratteri . _ % + -
     * + lo si usa per eseguire una concatenzaione di più caratteri
     * @ è il simbolo che identifica l'inizio di un dominio
     * [a-zA-Z0-9-] è una regular expression che identifica una stringa composta da lettere maiuscole e minuscole, numeri e il carattere -
     * \. è il simbolo che identifica il punto che separa il dominio dal suffisso
     * [a-z]{2,} è una regular expression che identifica una stringa composta da lettere minuscole e che deve essere lunga almeno 2 caratteri
     */
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-z]{2,}$/.test(mail)) validate.mail = "email is invalid"

    // check to see if the user object is a valid address
    //"Via Roma, 123, 00100 Roma Italia"
    // Split sulle virgole
    const parts = address.split(',')
    const street = parts[0].trim() // "Via Roma"
    const house_number = parts[1].trim() // "123"
    // Split su cap, city e country
    const restParts = parts[2].trim().split(' ');
    const cap = restParts[0]; // "00100"
    const city = restParts[1]; // "Roma"
    const country = restParts.slice(2).join(' '); // "Italia"

    // verifico che l'indirizzo sia completo
    if (parts.length !== 5) {
        validate.address = "missing a component"
    } else {
        if (!street.toLowerCase().includes('via') && !street.toLowerCase().includes('piazza')) validate.address = "address must contain via or piazza"

        // in questo controllo uso una regular expression per controllare che il cap sia composto da 5 numeri /^\d{5}$/
        if (!/^\d{5}$/.test(cap)) validate.address = "cap is invalid"
    }

    return validate
}


//exports functions
module.exports = {
    orderValidate,
    userValidate
}