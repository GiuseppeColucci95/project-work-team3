export default function PrivacyPolicy() {
    return (
        <div className="container py-5">
            <div className="privacy-header text-center mb-5">
                <h1 className="fw-bold" style={{ color: "#678b27" }}>Privacy Policy</h1>
                <p className="text-muted">Learn how we collect, use, and protect your personal information.</p>
            </div>

            <div className="privacy-content">
                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>1. Information We Collect</h2>
                    <p>We collect personal information that you provide to us directly, such as when you create an account, place an order, or contact customer support. This may include your name, email address, phone number, and payment details.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. How We Use Your Information</h2>
                    <p>Your information is used to process orders, provide customer support, and improve our services. We may also use your information to send promotional emails or updates about your orders.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. Sharing Your Information</h2>
                    <p>We do not sell your personal information to third parties. However, we may share your information with trusted partners to fulfill orders, process payments, or comply with legal obligations.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>4. Data Security</h2>
                    <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no system is completely secure, and we cannot guarantee absolute security.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>5. Your Rights</h2>
                    <p>You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:privacy@eatyourway.com" style={{ color: "#678b27" }}>privacy@eatyourway.com</a>.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>6. Cookies</h2>
                    <p>We use cookies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences in your browser settings. For more details, please see our <a href="/cookie-policy" style={{ color: "#678b27" }}>Cookie Policy</a>.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>7. Changes to This Policy</h2>
                    <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>8. Contact Us</h2>
                    <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:info@eatyourway.com" style={{ color: "#678b27" }}>info@eatyourway.com</a> or call us at <a href="tel:+123456789" style={{ color: "#678b27" }}>+1 234 567 89</a>.</p>
                </section>
            </div>
        </div>
    );
}