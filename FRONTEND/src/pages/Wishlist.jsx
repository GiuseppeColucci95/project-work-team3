//react and custom context imports
import { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

//component exports
export default function Wishlist() {

  //logic
  const { wishlist, getWishlistProducts, removeWishlistProduct, addCartProduct } = useProductContext();

  //useEffect on component start
  useEffect(() => {
    getWishlistProducts();
  }, []);

  //template
  return (
    <>
      <section id="wishlist">

        <div className="container">
          <h1 className="text-center wishlist-title">YOUR PRODUCT WISHLIST</h1>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 my-5 px-4">
            {
              (wishlist && wishlist.length > 0) ? (
                wishlist.map(product => (
                  <div key={`${product.name}-product`} className="col">
                    <div className="wishlist-card d-flex flex-column align-items-center p-3 h-100">
                      <div className="mb-3 d-flex justify-content-center w-100">
                        <img src={product.image} alt="image" className="img-fluid w-auto img-wishlist" style={{ maxHeight: "120px" }} />
                      </div>
                      <h3 className="mb-1 text-center w-100">{product.name}</h3>
                      <div className="mb-2 fs-5 fw-bold text-dark text-center w-100">{`${product.price}€`}</div>
                      <div className="d-flex align-items-center justify-content-center gap-2 mt-auto w-100">
                        <button onClick={() => addCartProduct(product)} className="btn-add me-1 button-wishlist">Add to cart</button>
                        <button onClick={() => removeWishlistProduct(product)} className="favourites">
                          <img className="menu-icons add-wishlist" src="/img/favourites-full.svg" alt="wishlist icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 d-flex align-items-center flex-column text-center py-5 mx-auto">
                  <span style={{ fontSize: "3rem", color: "#6366f1" }}>💔</span>
                  <h3 className="mt-3">Your wishlist is empty!</h3>
                  <p>Add products to see them here.</p>
                  <Link to="/search" className="btn-add mt-3 text-decoration-none">Back to shop</Link>
                </div>
              )
            }
          </div>
        </div>
      </section >
      {/* WISHLIST SECTION */}
    </>
  );
}