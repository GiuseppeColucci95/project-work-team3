export default function ReturnPolicy() {
    return (
        <div className="container py-5">
            <div className="return-header text-center mb-5">
                <h1 className="fw-bold" style={{ color: "#678b27" }}>Return Policy</h1>
                <p className="text-muted">Learn about our return and refund policies.</p>
            </div>

            <div className="return-content">
                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>1. Eligibility for Returns</h2>
                    <p>Products can be returned within 30 days of purchase if they are unused, unopened, and in their original packaging. Perishable goods, such as food items, are not eligible for returns unless they arrive damaged or defective.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. How to Initiate a Return</h2>
                    <p>To initiate a return, please contact our customer service team at <a href="mailto:returns@eatyourway.com" style={{ color: "#678b27" }}>returns@eatyourway.com</a>. Provide your order number and a brief explanation of the reason for the return.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. Refund Process</h2>
                    <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds will be processed within 5-7 business days and credited to your original payment method.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>4. Damaged or Defective Items</h2>
                    <p>If you receive a damaged or defective item, please contact us immediately at <a href="mailto:support@eatyourway.com" style={{ color: "#678b27" }}>support@eatyourway.com</a>. Include photos of the damaged item and your order details. We will arrange for a replacement or refund.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>5. Non-Returnable Items</h2>
                    <p>The following items are non-returnable:</p>
                    <ul>
                        <li>Perishable goods (e.g., food items)</li>
                        <li>Gift cards</li>
                        <li>Items marked as final sale</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>6. Contact Us</h2>
                    <p>If you have any questions about our return policy, please contact us at <a href="mailto:info@eatyourway.com" style={{ color: "#678b27" }}>info@eatyourway.com</a> or call us at <a href="tel:+123456789" style={{ color: "#678b27" }}>+1 234 567 89</a>.</p>
                </section>
            </div>
        </div>
    );
}