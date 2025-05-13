export default function Accessibility() {
    return (
        <div className="container py-5">
            <div className="accessibility-header text-center mb-5">
                <h1 className="fw-bold" style={{ color: "#678b27" }}>Accessibility</h1>
                <p className="text-muted">Learn about the measures we take to make our website accessible to everyone.</p>
            </div>

            <div className="accessibility-content">
                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>1. Our Commitment</h2>
                    <p>At Eat Your Way, we are committed to ensuring that our website is accessible to all users, including those with disabilities. We strive to provide an inclusive experience for everyone.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. Accessibility Features</h2>
                    <p>Our website includes the following accessibility features:</p>
                    <ul>
                        <li>Keyboard navigation for all interactive elements.</li>
                        <li>Text alternatives for non-text content, such as images.</li>
                        <li>High-contrast mode for better readability.</li>
                        <li>Responsive design for optimal viewing on all devices.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. Third-Party Tools</h2>
                    <p>We use third-party tools to monitor and improve the accessibility of our website. These tools help us identify and address potential issues to ensure compliance with accessibility standards.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>4. Feedback</h2>
                    <p>We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please contact us at:</p>
                    <p><a href="mailto:accessibility@eatyourway.com" style={{ color: "#678b27" }}>accessibility@eatyourway.com</a></p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>5. Ongoing Efforts</h2>
                    <p>We are continuously working to improve the accessibility of our website. Our team regularly reviews and updates our content and features to ensure compliance with the latest accessibility standards.</p>
                </section>
            </div>
        </div>
    );
}