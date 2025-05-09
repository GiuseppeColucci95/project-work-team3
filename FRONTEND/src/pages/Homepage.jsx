//react imports
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";

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
      <section id="jumbotron" className="d-flex align-items-center">
        <div className="container">

          <h2>Eat Your Way</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima similique dicta id dolorem magnam asperiores eius qui dolor, eos fuga praesentium impedit repellendus. Beatae sint officiis neque magni accusamus iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem sequi porro corporis, rerum placeat aliquam quam iure excepturi maiores nihil necessitatibus dolorem ducimus consectetur veniam molestias quaerat voluptate totam.
          </p>

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
                      <img className="w-100" src={product.image} alt={`${product.slug} image`} />
                      <h4>{product.name}</h4>
                      <h6>{product.price}</h6>
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
                      <img className="w-100" src={product.image} alt={`${product.slug} image`} />
                      <h4>{product.name}</h4>
                      <h6>{product.price}</h6>
                    </div>
                  )
                ))
              )
            }

          </div>
          {/* BEST SELLER PRODUCTS */}
        </div>
      </section >
      {/* LATEST PRODUCTS SECTION */}
    </>
  );
}