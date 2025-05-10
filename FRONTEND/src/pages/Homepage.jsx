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
          <p>
            Eat Your Way is your go-to online destination for delicious, safe, and carefully curated food products designed for people with specific dietary needs. Whether you're managing diabetes, living with celiac disease, or navigating food intolerances, we make it easy to shop with confidence. Our mission is to put health and flavor on the same plate. Because everyone deserves to enjoy food without compromise.
          </p>
          <button className="explore-btn">EXPLORE OUR PRODUCTS</button>

        </div >
      </section>
      {/* JUMBOTRON SECTION */}

      <section id="description" className="my-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <img src="https://picsum.photos/400/300" alt="description image" className="w-100" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa asperiores suscipit aliquid eveniet libero ratione quia, sed ducimus ullam harum fugiat omnis similique sapiente deserunt reiciendis placeat accusamus corporis voluptates nihil quaerat id voluptate nulla odit. Eum eos non vitae laboriosam enim officiis ratione magnam doloribus, saepe architecto reiciendis, velit delectus dolorem sit, aliquid maiores cumque tenetur a id. Nobis temporibus amet fuga ipsam magni quaerat voluptas dicta debitis illo, consectetur, odio, corporis placeat laborum unde accusamus nesciunt voluptate ea.
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