import { Link } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

//component exports
export default function Cart() {

  //logic
  const { cart, removeCartProduct, addCartProduct, totalPrice } = useProductContext();

  //template  
  return (
    <>
      <section id="cart" className="cart-list">
        <div className="container">
          <div className="row gx-5">
            <div className={`col-12 bg-body-tertiary ${(cart && cart.length > 0) ? 'col-md-8' : ''} cart-products`}>
              <h1 className="text-center mt-5 wishlist-title"><strong>YOUR CART PRODUCTS</strong></h1>
              <div className="row row-cols-1 row-gap-3 my-5">
                {
                  (cart && cart.length > 0) ?
                    (
                      cart.map(product => (
                        <div key={`${product.name}-product`} className="col">
                          <div className="row d-flex justify-content-center mb-3">
                            <div className="col-2 product-image-cart">
                              <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                                <img src={product.image} alt="image" className="w-100 rounded-4" style={{ aspectRatio: '0.75', objectFit: 'cover' }} />
                              </Link>
                            </div>
                            <div className="col-6 d-flex flex-column align-items-start justify-content-between">
                              <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                                <h3 className="mb-0 product-name-cart">{product.name}</h3>
                              </Link>
                              <div className="d-flex align-items-center gap-2 quantity-section mt-2 mb-2">
                                <button onClick={() => removeCartProduct(product)} className="btn-quantity"><i className="bi bi-dash-circle"></i></button>
                                <div id="quantity" className="mx-1">{product.cartQuantity}</div>
                                <button onClick={() => addCartProduct(product)} className="btn-quantity"><i className="bi bi-plus-circle"></i></button>
                              </div>
                              {
                                (product.discount_percentage > 0) ?
                                  (
                                    <div>
                                      <span className="me-2 fs-4 fw-semibold"><s>{`${(product.price * product.cartQuantity).toFixed(2)}€`}</s></span>
                                      <span className="me-2 fs-4 fw-semibold">{`${((product.price - product.price * (product.discount_percentage / 100)).toFixed(2) * product.cartQuantity).toFixed(2)}€`}</span>
                                    </div>
                                  )
                                  :
                                  (<h3 className="me-2 fs-4 fw-semibold">{`${(product.price * product.cartQuantity).toFixed(2)}€`}</h3>)
                              }
                            </div>
                          </div>
                        </div>
                      ))
                    )
                    :
                    (
                      <div className="col-12 d-flex align-items-center flex-column text-center py-5 mx-auto">
                        <span style={{ fontSize: "3rem", color: "#6366f1" }}>🛒</span>
                        <h3 className="mt-3">Your cart is empty!</h3>
                        <p>Add products to see them here.</p>
                        <Link to="/search" className="btn-add mt-3 text-decoration-none">Back to shop</Link>
                      </div>
                    )
                }
              </div>
            </div>

            {(cart && cart.length > 0) &&
              (<div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 bg-summary pt-5 rounded-4">
                <h3 className="checkout-title mb-3"><strong>Summary</strong></h3>
                <div className="summary-text d-flex flex-column gap-4 pt-3">
                  <h5 className="summary-price"><strong>Subtotal:</strong> {totalPrice.toFixed(2)}€ </h5>
                  <h5 className="summary-price"><strong>Shipping:</strong> {(totalPrice > 39.99) ? ('0.00') : ('9.99')}€ </h5>
                  <hr className="my-0" />

                  <h5 className="summary-price"><strong>Order total:</strong> {(totalPrice > 39.99) ? (totalPrice.toFixed(2)) : ((totalPrice + 9.99).toFixed(2))}€ </h5>
                  <div className="d-flex justify-content-center">
                    <Link to="/checkout">
                      <button type="button" className="btn-gr mt-1">CHECKOUT</button>
                    </Link>
                  </div>
                </div>

              </div>)}
          </div>
        </div>
      </section >
    </>
  );
}