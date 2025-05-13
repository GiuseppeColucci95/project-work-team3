export default function FAQs() {
    return (
        <div className="container py-5">
            <div className="faqs-header text-center mb-5">
                <h1 className="fw-bold" style={{ color: "#678b27" }}>Frequently Asked Questions</h1>
                <p className="text-muted">Find answers to the most common questions about our products and services.</p>
            </div>

            <div className="faqs-content">
                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>1. What is Eat Your Way?</h2>
                    <p>Eat Your Way is an online platform offering a wide range of food products tailored to specific dietary needs, such as gluten-free, sugar-free, and vegan options.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. How can I place an order?</h2>
                    <p>You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. You will need to create an account or log in to complete your purchase.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. What payment methods do you accept?</h2>
                    <p>We accept major credit cards, PayPal, and other secure payment methods. All transactions are encrypted to ensure your safety.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>4. How can I track my order?</h2>
                    <p>Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our Order Tracking page.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>5. What is your return policy?</h2>
                    <p>We accept returns within 30 days of purchase for unused and unopened items. For more details, please visit our <a href="/return-policy" style={{ color: "#678b27" }}>Return Policy</a> page.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>6. How can I contact customer support?</h2>
                    <p>You can reach our customer support team at <a href="mailto:support@eatyourway.com" style={{ color: "#678b27" }}>support@eatyourway.com</a> or call us at <a href="tel:+123456789" style={{ color: "#678b27" }}>+1 234 567 89</a>.</p>
                </section>
            </div>
        </div>
    );
}