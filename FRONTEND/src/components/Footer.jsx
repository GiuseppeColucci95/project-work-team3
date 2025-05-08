export default function Footer() {

  //logic

  //template
  return (
    <>
      <footer className="bg-gray-100 mt-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* logo */}
          <div className="col-span-2 flex flex-col items-start">
            <img
              src="https://via.placeholder.com/150x50?text=Your+Logo"
              alt="Brand Logo"
              className="mb-4"
            />
            <p className="text-sm text-gray-600">
              Prodotti alimentari selezionati per diabetici, celiaci e persone con intolleranze. Salute e gusto, insieme.
            </p>
          </div>

          {/* menu */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-3">Products</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="#">Sugar-free</a></li>
              <li><a href="#">Lactose-free</a></li>
              <li><a href="#">Gluten-free</a></li>
              <li><a href="#">Nickel-free</a></li>
              <li><a href="#">Nuts-free</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-3">Support</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Return policy</a></li>
            </ul>
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Eat Your Way. All rights reserved.
        </div>
      </footer>
    </>
  );
}