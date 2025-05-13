export default function AboutUs() {
    return (
        <div className="container py-5">
            <div className="about-header text-center mb-5">
                <h1 className="fw-bold" style={{ color: "#678b27" }}>About Us</h1>
                <p className="text-muted">Learn more about our story, mission, and values.</p>
            </div>

            <div className="about-content">
                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>1. Our Story</h2>
                    <p>Eat Your Way was founded with the vision of making healthy eating accessible and enjoyable for everyone. From humble beginnings, we have grown into a trusted brand that prioritizes quality, sustainability, and customer satisfaction.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. Our Mission</h2>
                    <p>Our mission is to provide high-quality, delicious, and nutritious food products that cater to diverse dietary needs. We believe in empowering people to make healthier choices without compromising on taste.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. Our Values</h2>
                    <p>We are guided by the following core values:</p>
                    <ul>
                        <li><strong>Quality:</strong> Delivering the best products to our customers.</li>
                        <li><strong>Sustainability:</strong> Protecting the environment through responsible practices.</li>
                        <li><strong>Innovation:</strong> Continuously improving and creating new solutions.</li>
                        <li><strong>Community:</strong> Supporting local farmers and giving back to society.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>4. Meet the Team</h2>
                    <p>Our team is made up of passionate individuals who are dedicated to making a difference. From product development to customer support, every member of our team plays a vital role in achieving our mission.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>5. Contact Us</h2>
                    <p>If you'd like to learn more about our company or have any questions, feel free to reach out to us at <a href="mailto:info@eatyourway.com" style={{ color: "#678b27" }}>info@eatyourway.com</a>.</p>
                </section>
            </div>
        </div>
    );
}