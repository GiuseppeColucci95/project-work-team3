export default function Contacts() {
    return (
        <div className="container py-5">
            <div className="contacts-header text-center mb-5">
                <h1 className="fw-bold" style={{ color: "#678b27" }}>Contact Us</h1>
                <p className="text-muted">We'd love to hear from you! Reach out to us through any of the methods below.</p>
            </div>

            <div className="contacts-content">
                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>1. Email Us</h2>
                    <p>For general inquiries, please email us at <a href="mailto:info@eatyourway.com" style={{ color: "#678b27" }}>info@eatyourway.com</a>.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. Call Us</h2>
                    <p>You can reach our customer support team at <a href="tel:+123456789" style={{ color: "#678b27" }}>+1 234 567 89</a>. Our lines are open Monday to Friday, 9 AM to 5 PM.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. Visit Us</h2>
                    <p>Our office is located at:</p>
                    <address style={{ color: "#555" }}>
                        123 Healthy Way, Food City<br />
                        Country XYZ
                    </address>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>4. Follow Us</h2>
                    <p>Stay connected with us on social media:</p>
                    <ul className="list-unstyled d-flex gap-3">
                        <li><a href="#" style={{ color: "#678b27" }}><i className="bi bi-facebook"></i> Facebook</a></li>
                        <li><a href="#" style={{ color: "#678b27" }}><i className="bi bi-twitter"></i> Twitter</a></li>
                        <li><a href="#" style={{ color: "#678b27" }}><i className="bi bi-instagram"></i> Instagram</a></li>
                        <li><a href="#" style={{ color: "#678b27" }}><i className="bi bi-linkedin"></i> LinkedIn</a></li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>5. Contact Form</h2>
                    <p>Fill out the form below, and we'll get back to you as soon as possible:</p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success" style={{ backgroundColor: "#678b27", borderColor: "#678b27" }}>Send Message</button>
                    </form>
                </section>
            </div>
        </div>
    );
}