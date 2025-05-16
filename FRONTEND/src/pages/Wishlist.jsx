//react and custom context imports
import { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

//component exports
export default function Wishlist() {

  //logic
  const { wishlist, getWishlistProducts, removeWishlistProduct, addCartProduct, cart, removeCartProduct } = useProductContext();

  //useEffect on component start
  useEffect(() => {
    getWishlistProducts();
  }, []);

  //function to check if the product is in cart
  function isIncart(selectedProduct) {

    if (cart) {
      if (cart.length > 0) {

        const nameToCheck = selectedProduct.name;
        const isInCart = cart.find(product => {
          return product.name === nameToCheck;
        })
        if (isInCart) return isInCart;
      }
    } else {
      return false;
    }
    return false;
  }

  //template
  return (
    <>
      <section id="wishlist">

        <div className="container">
          <h1 className="text-center wishlist-title">YOUR WISHLIST</h1>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 my-5 px-4">
            {
              (wishlist && wishlist.length > 0) ? (
                wishlist.map(product => (
                  <div key={`${product.name}-product`} className="col">

                    <div className="wishlist-card d-flex flex-column align-items-center p-3 h-100">
                      <div className="mb-3 d-flex justify-content-center w-100">
                        <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                          <img src={product.image} alt="image" className="img-fluid w-auto img-wishlist" style={{ maxHeight: "120px" }} />
                        </Link>
                      </div>
                      <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                        <h3 className="mb-1 text-center w-100">{product.name}</h3>
                      </Link>
                      {
                        (product.discount_percentage > 0) ?
                          (
                            <div>
                              <span className="mb-2 fs-5 fw-bold text-dark text-center w-100 me-2"><s>{`${product.price}€`}</s></span>
                              <span className="mb-2 fs-5 fw-bold text-dark text-center w-100">{`${((product.price - product.price * (product.discount_percentage / 100)).toFixed(2))}€`}</span>
                            </div>
                          )
                          :
                          (<span className="mb-2 fs-5 fw-bold text-dark text-center w-100">{`${product.price}€`}</span>)
                      }
                      <div className="d-flex align-items-center justify-content-center gap-2 mt-auto w-100">
                        {
                          (isIncart(product))
                            ?
                            (<div className="w-75 row d-flex align-items-center justify-content-center">
                              <button onClick={() => removeCartProduct(product)} className="col-4 col-xs-5 px-0 mx-0 text-dark btn-add"><i className="bi bi-dash-circle"></i></button>
                              <div id="quantity" className="col-3 text-center">{isIncart(product).cartQuantity}</div>
                              <button onClick={() => addCartProduct(product)} className="col-4 col-xs-5 px-0 mx-0 text-dark btn-add"><i className="bi bi-plus-circle"></i></button>
                            </div>)
                            :
                            (<button onClick={() => addCartProduct(product)} className="btn-add w-75">ADD TO CART</button>)
                        }
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