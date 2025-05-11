
const nodemailer = require('nodemailer')

// Funzione per inviare la mail
async function sendOrderConfirmationMail(order, orderId) {
    // Configura il trasportatore (usa credenziali reali in produzione)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tuamail@gmail.com',
            pass: 'tuapassword'
        }
    });

    // Imposta i dettagli della mail
    let mailOptions = {
        from: 'tuamail@gmail.com',
        to: order.mail,
        subject: 'Conferma ordine',
        text: `Ciao ${order.firstname}, il tuo ordine #${orderId} è stato ricevuto con successo!`
    };

    // Invia la mail
    await transporter.sendMail(mailOptions);
}

module.exports = {
    sendOrderConfirmationMail
}