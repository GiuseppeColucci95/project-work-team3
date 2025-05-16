//importo modulo per gestire l'email
const generateOrderSummaryHtml = require('./generateOrderSummaryHtml')
const nodemailer = require('nodemailer')

// Funzione per inviare la mail
async function sendOrderConfirmationMail(order, orderId) {
    // Configura il trasportatore (usa credenziali reali in produzione)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }
    })

    const paginaHTML = generateOrderSummaryHtml(order, orderId)
    let attachments = []/* order.products.map((p, i) => ({
        path: p.product_image,
        cid: `productd-image${i}` // Assicurati che il cid sia unico per ogni immagine
    })) */
    attachments.push({
        path: 'http://localhost:3000/images/logo.png',
        cid: 'logo'
    })

    console.log("attachments", attachments)

    // Imposta i dettagli della mail
    let mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: order.mail,
        subject: 'Conferma ordine',
        html: paginaHTML,
        attachments: attachments
    }

    let mailSeller = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: 'Conferma ordine',
        html: paginaHTML,
        attachments: attachments
    }

    // Invia la mail
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(mailSeller)
}

module.exports = sendOrderConfirmationMail