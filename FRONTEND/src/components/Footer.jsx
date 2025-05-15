import { Link } from "react-router-dom";

export default function Footer() {

  //logic

  //template
  return (
    <>
      <footer className="footer mt-12 border-t border-gray-200">
        <div className="footer-container max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* logo */}
          <div className="footer-logo col-span-2 flex flex-col items-start">
            <img
              src="/img/logo.png"
              alt="Brand Logo"
              className="mb-4 footer-logo-img"
            />
            <p className="payoff text-sm text-gray-600">
              Products made with <strong>love</strong>.<br /> <strong>Don't choose between health and taste.</strong>
            </p>
          </div>

          {/* menu */}
          <div className="footer-menu">
            <div className="footer-menu-ce">
              {/* Colonna "Company" */}
              <div className="footer-menu-sx">
                <h4 className="text-gray-800 font-semibold mb-3">Company</h4>
                <ul className="text-sm text-gray-600">
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/our-mission">Our Mission</Link></li>
                  <li><Link to="/careers">Careers</Link></li>
                  <li><Link to="/press">Press</Link></li>
                </ul>
              </div>

              {/* Colonna "Support" */}
              <div className="footer-menu-dx">
                <h4 className="text-gray-800 font-semibold mb-3">Support</h4>
                <ul className="text-sm text-gray-600">
                  <li><Link to="/contacts">Contacts</Link></li>
                  <li><Link to="/shipping">Shipping</Link></li>
                  <li><Link to="/return-policy">Return Policy</Link></li>
                  <li><Link to="/faqs">FAQs</Link></li>
                </ul>
              </div>

              {/* Colonna "Legal" */}
              <div className="footer-legal">
                <h4 className="text-gray-800 font-semibold mb-3">Legal</h4>
                <ul className="text-sm text-gray-600">
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service">Terms of Service</Link></li>
                  <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                  <li><Link to="/accessibility">Accessibility</Link></li>
                </ul>
              </div>

              {/* Colonna "Contacts" */}
              <div className="footer-contacts">
                <h4 className="text-gray-800 font-semibold mb-3">Contacts</h4>
                <ul className="text-sm text-gray-600">
                  <li><a href="mailto:info@eatyourway.com"><strong>mail:</strong>E info@eatyourway.com</a></li>
                  <li><a href="tel:+123456789"><strong>Phone:</strong> +1 234 567 89</a></li>
                  <li><a href="#"><strong>Address:</strong> 123 Healthy Way, Food City</a></li>
                  <li>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        {/* copyright */}
        <hr style={{ color: "rgb(183, 108, 73)" }} />
        <div className="copyright border-t border-gray-300 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <strong>Eat Your Way</strong> All rights reserved.
        </div>
      </footer>
    </>
  );
}