export default function Careers() {
    return (
        <div className="container py-5">
            <div className="careers-header text-center mb-5">
                <h1 className="fw-bold" style={{ color: "#678b27" }}>Careers</h1>
                <p className="text-muted">Join our team and help us make a difference in the world of healthy eating.</p>
            </div>

            <div className="careers-content">
                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>1. Why Work With Us?</h2>
                    <p>At Eat Your Way, we are passionate about creating a positive impact on people's lives through healthy and delicious food. Join a team that values innovation, collaboration, and sustainability.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. Current Job Openings</h2>
                    <p>Explore our latest job opportunities:</p>
                    <ul>
                        <li><strong>Marketing Specialist</strong> - Help us spread the word about our mission. <a href="mailto:careers@eatyourway.com" style={{ color: "#678b27" }}>Apply Now</a></li>
                        <li><strong>Product Manager</strong> - Lead the development of our innovative food products. <a href="mailto:careers@eatyourway.com" style={{ color: "#678b27" }}>Apply Now</a></li>
                        <li><strong>Customer Support Representative</strong> - Provide exceptional service to our customers. <a href="mailto:careers@eatyourway.com" style={{ color: "#678b27" }}>Apply Now</a></li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. How to Apply</h2>
                    <p>To apply for a position, please send your resume and cover letter to <a href="mailto:careers@eatyourway.com" style={{ color: "#678b27" }}>careers@eatyourway.com</a>. Be sure to include the job title in the subject line.</p>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>4. Our Values</h2>
                    <p>We believe in:</p>
                    <ul>
                        <li><strong>Innovation:</strong> Continuously improving and creating new solutions.</li>
                        <li><strong>Sustainability:</strong> Protecting the planet for future generations.</li>
                        <li><strong>Customer Focus:</strong> Putting our customers at the heart of everything we do.</li>
                        <li><strong>Teamwork:</strong> Collaborating to achieve our goals.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}