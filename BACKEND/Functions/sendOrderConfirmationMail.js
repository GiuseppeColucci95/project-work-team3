//importo modulo per gestire l'email
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
    });

    // Imposta i dettagli della mail
    let mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: order.mail,
        subject: 'Conferma ordine',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #4CAF50;">Grazie per il tuo ordine!</h2>
                <p>Ciao <strong>${order.firstname}</strong>,</p>
                <p>Il tuo ordine <b>#${orderId}</b> è stato ricevuto con successo!</p>
                <hr>
                <p style="font-size: 0.9em; color: #888;">Ti contatteremo appena sarà spedito.</p>
            </div>
        `
    }

    // Invia la mail
    await transporter.sendMail(mailOptions)
}

module.exports = sendOrderConfirmationMail