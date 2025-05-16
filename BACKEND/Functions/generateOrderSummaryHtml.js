function generateOrderSummaryHtml(order, orderId) {
  const orderDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const productRows = order.products.map((p, i) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; display: flex; align-items: center;">
        <img src="cid:productd-image${i}" alt="${p.product_name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; margin-right: 10px;">
        ${p.product_name}
      </td>
      <td align="center" style="padding: 12px 0; border-bottom: 1px solid #eee;">${p.quantity}</td>
      <td align="right" style="padding: 12px 0; border-bottom: 1px solid #eee;">€${p.product_price}</td>
    </tr>
  `).join("")

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Order Summary</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;">

  <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px;">
    <div style="text-align: center;">
      <img src="cid:logo" alt="Eat Your Way" style="height: 60px; margin-bottom: 20px;">
    </div>

    <h1 style="color: #4CAF50; text-align: center;">Thank you for your order!</h1>

    <p style="font-size: 16px;">Hi <strong>${order.firstname} ${order.lastname}</strong>,</p>
    <p style="font-size: 16px;">Here is the summary of your order placed on <strong>Eat Your Way</strong>.</p>

    <h3>Shipping Address</h3>
    <p>${order.address}</p>

    <table width="100%" style="border-collapse: collapse; margin-top: 20px;">
      <thead>
        <tr>
          <th align="left" style="border-bottom: 2px solid #ddd; padding: 8px 0;">Product</th>
          <th align="center" style="border-bottom: 2px solid #ddd; padding: 8px 0;">Quantity</th>
          <th align="right" style="border-bottom: 2px solid #ddd; padding: 8px 0;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${productRows}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" style="padding-top: 15px; font-weight: bold;">Total</td>
          <td align="right" style="padding-top: 15px; font-weight: bold;">€${order.final_price}</td>
        </tr>
      </tfoot>
    </table>

    <p style="margin-top: 20px; font-size: 14px;">
      <strong>Order status:</strong> ${order.status}<br>
      <strong>Order number:</strong> #${orderId}<br>
      <strong>Order date:</strong> ${orderDate}
    </p>

    <p style="margin-top: 20px;">
      You can return to our website from the following link:<br>
      <a href="http://localhost:5173/" style="color: #4CAF50;">Return to website</a>
    </p>
  </div>

</body>
</html>
  `
}

module.exports = generateOrderSummaryHtml;
