export default function Shipping() {
    return (
        <div className="container py-5">
            <div className="shipping-header text-center mb-5">
                <h1 className="fw-bold" style={{ color: "#678b27" }}>Shipping Information</h1>
                <p className="text-muted">Learn about our shipping methods, costs, and delivery times.</p>
            </div>

            <div className="shipping-content">
                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>1. Shipping Methods</h2>
                    <p>We offer a variety of shipping methods to meet your needs, including standard, express, and next-day delivery. All orders are processed within 1-2 business days.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. Shipping Costs</h2>
                    <p>Shipping costs are calculated based on the weight of your order and the delivery location. Standard shipping is free for orders over €50. For orders below €50, a flat rate of €5 applies.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. Delivery Times</h2>
                    <p>Delivery times vary depending on your location and the shipping method selected:</p>
                    <ul>
                        <li><strong>Standard Shipping:</strong> 3-5 business days</li>
                        <li><strong>Express Shipping:</strong> 1-2 business days</li>
                        <li><strong>Next-Day Delivery:</strong> Order by 12 PM for next-day delivery</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>4. International Shipping</h2>
                    <p>We ship internationally to select countries. International shipping costs and delivery times vary based on the destination. Please check our <a href="/faqs" style={{ color: "#678b27" }}>FAQs</a> for more details.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>5. Tracking Your Order</h2>
                    <p>Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on our <a href="/order-tracking" style={{ color: "#678b27" }}>Order Tracking</a> page.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>6. Contact Us</h2>
                    <p>If you have any questions about shipping, please contact us at <a href="mailto:info@eatyourway.com" style={{ color: "#678b27" }}>info@eatyourway.com</a> or call us at <a href="tel:+123456789" style={{ color: "#678b27" }}>+1 234 567 89</a>.</p>
                </section>
            </div>
        </div>
    );
}