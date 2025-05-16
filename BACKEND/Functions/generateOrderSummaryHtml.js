function generateOrderSummaryHtml(order, orderId) {

    /**
      * order : 
      * promotion_id,
      * total_not_discounted,
      * total_discounted,
      * shipping,
      * final_price,
      * status,
      * products,
      * firstname,
      * lastname,
      * phone,
      * mail,
      * address
     */

    const dataOrdine = new Date().toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })

    const righeProdotti = order.products.map(p => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; display: flex; align-items: center;">
        <img src="cid:${p.product_name}" alt="${p.product_name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; margin-right: 10px;">
        ${p.product_name}
      </td>
      <td align="right" style="padding: 12px 0; border-bottom: 1px solid #eee;">€${p.product_price}</td>
    </tr>
  `).join("")

    return `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Riepilogo Ordine</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;">

  <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px;">
    <div style="text-align: center;">
      <img src="cid:logo" alt="Eat Your Way" style="height: 60px; margin-bottom: 20px;">
    </div>

    <h1 style="color: #4CAF50; text-align: center;">Grazie per il tuo ordine!</h1>

    <p style="font-size: 16px;">Ciao <strong>${order.firstname} ${order.lastname}</strong>,</p>
    <p style="font-size: 16px;">Ecco il riepilogo del tuo ordine effettuato su <strong>Eat Your Way</strong>.</p>

    <h3>Indirizzo di spedizione</h3>
    <p>${order.address}</p>

    <table width="100%" style="border-collapse: collapse; margin-top: 20px;">
      <thead>
        <tr>
          <th align="left" style="border-bottom: 2px solid #ddd; padding: 8px 0;">Prodotto</th>
          <th align="right" style="border-bottom: 2px solid #ddd; padding: 8px 0;">Prezzo</th>
        </tr>
      </thead>
      <tbody>
        ${righeProdotti}
      </tbody>
      <tfoot>
        <tr>
          <td style="padding-top: 15px; font-weight: bold;">Totale</td>
          <td align="right" style="padding-top: 15px; font-weight: bold;">€${order.final_price}</td>
        </tr>
      </tfoot>
    </table>

    <p style="margin-top: 20px; font-size: 14px;">
      <strong>Stato ordine:</strong> ${order.status}<br>
      <strong>Numero ordine:</strong> #${orderId}<br>
      <strong>Data ordine:</strong> ${dataOrdine}
    </p>

    <p style="margin-top: 20px;">
      Puoi tornare al sito dal seguente link:<br>
      <a href="http://localhost:5173/" style="color: #4CAF50;">Torna al sito</a>
    </p>
  </div>

</body>
</html>
  `
}

module.exports = generateOrderSummaryHtml