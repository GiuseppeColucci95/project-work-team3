//react imports
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

//component exports
export default function Homepage() {

  //logic
  const { latestProducts, getLatestProducts, bestSellersProducts, getBestSellersProducts } = useProductContext();
  const [numberOfLatestProducts, setNumberOfLatestProducts] = useState(8);
  const [numberOfBestSellersProducts, setNumberOfBestSellersProducts] = useState(8);

  //useEffect to get products on the start page
  useEffect(() => {
    getLatestProducts();
    getBestSellersProducts();
  }, []);

  //template
  return (
    <>
      <section id="jumbotron" className="d-flex align-items-center jumbotron-container">
        <div className="jumbo-container">
          <h2 className="jumbo-title">EAT <span style={{ color: "rgb(103, 139, 39" }}>YOUR </span>WAY</h2>
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

      <section className="description">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <img src="img/people.svg" alt="description image" className="w-100" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <p className="description-text">
                <strong>Eat Your Way</strong> is your go-to online destination for delicious, safe, and carefully curated food products designed for people with specific dietary needs. Whether you're managing diabetes, living with celiac disease, or navigating food intolerances, we make it easy to shop with confidence. <br />Our mission is to put health and flavor on the same plate. Because everyone deserves to enjoy food <strong>without compromise.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* HOMEPAGE DESCRIPTION SECTION */}

      <section id="latest-products" className="py-5">
        <div className="container">
          <h3>LATEST PRODUCTS</h3>
          <p>Here you can find our latest products!</p>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
            {
              (latestProducts) &&
              (
                latestProducts.map((product, index) => (
                  (index < numberOfLatestProducts) &&
                  (
                    <div key={product.id} className="col" >
                      <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                        <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} className="w-100 rounded-4" src={product.image} alt={`${product.slug} image`} />
                        <h4 className="mt-2">{product.name}</h4>
                        <h6>{product.price}</h6>
                      </Link>
                    </div>
                  )
                ))
              )
            }

          </div>
          {/* LATEST PRODUCTS */}
        </div>
      </section >
      {/* BEST SELLERS SECTION */}

      <section id="best-sellers" className="py-5" >
        <div className="container">
          <h3>BEST SELLERS</h3>
          <p>Here you can find our best sellers!</p>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
            {
              (bestSellersProducts) &&
              (
                bestSellersProducts.map((product, index) => (
                  (index < numberOfBestSellersProducts) &&
                  (
                    <div key={product.id} className="col" >
                      <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                        <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} className="w-100 rounded-4" src={product.image} alt={`${product.slug} image`} />
                        <h4 className="mt-2">{product.name}</h4>
                        <h6>{product.price}</h6>
                      </Link>
                    </div>
                  )
                ))
              )
            }

          </div>
          {/* BEST SELLER PRODUCTS */}
        </div>
      </section>
      {/* LATEST PRODUCTS SECTION */}
    </>
  );
}