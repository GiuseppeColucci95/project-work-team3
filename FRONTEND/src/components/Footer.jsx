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
              src="https://picsum.photos/50/50"
              alt="Brand Logo"
              className="mb-4"
            />
            <p className="payoff text-sm text-gray-600">
              Prodotti alimentari selezionati per diabetici, celiaci e persone con intolleranze.<br /> <strong>Salute e gusto, insieme.</strong>
            </p>
          </div>

          {/* menu */}
          <div className="footer-menu">
            <div className="footer-menu ce">
              <div className="footer-menu-sx">
                <h4 className="text-gray-800 font-semibold mb-3">Products</h4>
                <ul className="text-sm text-gray-600">
                  <li><a href="#">All products</a></li>
                  <li><a href="#">Sugar-free</a></li>
                  <li><a href="#">Lactose-free</a></li>
                  <li><a href="#">Gluten-free</a></li>
                  <li><a href="#">Nickel-free</a></li>
                  <li><a href="#">Nuts-free</a></li>
                </ul>
              </div>
              <div className="footer-menu-dx">
                <h4 className="text-gray-800 font-semibold mb-3">Support</h4>
                <ul className="text-sm text-gray-600">
                  <li><a href="#">Contacts</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">Return policy</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-contacts">
              <h4 className="text-gray-800 font-semibold mb-3">Contacts</h4>
              <ul className="text-sm text-gray-600">
                <li><a href="#">Email</a></li>
                <li><a href="#">Phone</a></li>
                <li><a href="#">Address</a></li>
                <li><a href="#"><i className="bi bi-instagram"></i></a><a href="#"><i className="bi bi-twitter"></i></a><a href="#"><i className="bi bi-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* copyright */}
        <hr />
        <div className="copyright border-t border-gray-300 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <strong>Eat Your Way</strong> All rights reserved.
        </div>
      </footer>
    </>
  );
}