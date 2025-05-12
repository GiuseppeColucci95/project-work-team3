export default function Press() {
    return (
        <div className="container py-5">
            <div className="press-header text-center mb-5">
                <h1 className="fw-bold" style={{ color: "#678b27" }}>Press</h1>
                <p className="text-muted">Stay updated with our latest press releases and media mentions.</p>
            </div>

            <div className="press-content">
                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>1. Latest Press Releases</h2>
                    <p>Discover our latest announcements and updates:</p>
                    <ul>
                        <li><a href="/press/release-1" style={{ color: "#678b27" }}>Eat Your Way Launches New Product Line</a> - March 2025</li>
                        <li><a href="/press/release-2" style={{ color: "#678b27" }}>Partnership with Local Farmers</a> - February 2025</li>
                        <li><a href="/press/release-3" style={{ color: "#678b27" }}>Eat Your Way Wins Sustainability Award</a> - January 2025</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. Media Mentions</h2>
                    <p>See what the media is saying about us:</p>
                    <ul>
                        <li><a href="https://example.com/article-1" target="_blank" rel="noopener noreferrer" style={{ color: "#678b27" }}>"Eat Your Way: Revolutionizing Healthy Eating" - Food Magazine</a></li>
                        <li><a href="https://example.com/article-2" target="_blank" rel="noopener noreferrer" style={{ color: "#678b27" }}>“Top 10 Startups to Watch in 2025” - Startup Weekly</a></li>
                        <li><a href="https://example.com/article-3" target="_blank" rel="noopener noreferrer" style={{ color: "#678b27" }}>“How Eat Your Way is Supporting Local Communities” - Green Times</a></li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. Contact for Press Inquiries</h2>
                    <p>If you're a journalist or media professional and would like to get in touch, please contact us at:</p>
                    <p><a href="mailto:press@eatyourway.com" style={{ color: "#678b27" }}>press@eatyourway.com</a></p>
                    <p>or call us at <a href="tel:+123456789" style={{ color: "#678b27" }}>+1 234 567 89</a>.</p>
                </section>
            </div>
        </div>
    );
}