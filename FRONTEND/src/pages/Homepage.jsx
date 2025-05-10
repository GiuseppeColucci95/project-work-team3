//react imports
import { useProductContext } from "../contexts/ProductContext";

//component exports
export default function Homepage() {

  //logic
  const { getNewestProducts, getBestSellersProducts } = useProductContext();

  //template
  return (
    <>
      <section id="jumbotron" className="d-flex align-items-center jumbotron-container">
        <div className="jumbo-container">
          <h2 className="jumbo-title">EAT YOUR WAY</h2>
          <p className="jumbo-text">
            Don't <br />compromise.
          </p>
          <button className="explore-btn">EXPLORE OUR PRODUCTS</button>
        </div >
      </section>
      <div className="allergens">
        <img src="img/gluten-free.png" className="food-allergens" alt="gluten-free" />
        <img src="img/sugar-free.png" className="food-allergens" alt="sugar-free" />
        <img src="img/lactose-free.png" className="food-allergens" alt="lactose-free" />
        <img src="img/nuts-free.png" className="food-allergens" alt="nuts-free" />
        <img src="img/nickel-free.png" className="food-allergens" alt="nickel-free" />
      </div>
      {/* JUMBOTRON SECTION */}

      <section id="description" className="my-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <img src="https://picsum.photos/400/300" alt="description image" className="w-100" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <p className="description-text">
                <strong>Eat Your Way</strong> is your go-to online destination for delicious, safe, and carefully curated food products designed for people with specific dietary needs. Whether you're managing diabetes, living with celiac disease, or navigating food intolerances, we make it easy to shop with confidence. <br />Our mission is to put health and flavor on the same plate. Because everyone deserves to enjoy food without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* HOMEPAGE DESCRIPTION SECTION */}

      <section id="best-sellers" className="py-5">
        <div className="container">
          <h3>BEST SELLERS</h3>
          <p>Here you can find our best sellers!</p>

          <div className="row g-3">
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
          </div>
          {/* PRODUCTS */}
        </div>
      </section>
      {/* BEST SELLERS SECTION */}

      <section id="latest-products" className="py-5">
        <div className="container">
          <h3>LATEST PRODUCTS</h3>
          <p>Here you can find our latest products!</p>

          <div className="row g-3">
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
          </div>
          {/* PRODUCTS */}
        </div>
      </section>
      {/* LATEST PRODUCTS SECTION */}
    </>
  );
}