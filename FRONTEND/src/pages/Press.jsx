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
                        <li>Eat Your Way Launches New Product Line - March 2025</li>
                        <li>Partnership with Local Farmers - February 2025</li>
                        <li>Eat Your Way Wins Sustainability Award - January 2025</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>2. Media Mentions</h2>
                    <p>See what the media is saying about us:</p>
                    <ul>
                        <li>"Eat Your Way: Revolutionizing Healthy Eating" - Food Magazine</li>
                        <li>“Top 10 Startups to Watch in 2025” - Startup Weekly</li>
                        <li>“How Eat Your Way is Supporting Local Communities” - Green Times</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="fw-semibold" style={{ color: "#444" }}>3. Contact for Press Inquiries</h2>
                    <p>If you're a journalist or media professional and would like to get in touch, please contact us at:</p>
                    <p>press@eatyourway.com</p>
                    <p>or call us at +1 234 567 89.</p>
                </section>
            </div>
        </div>
    );
}