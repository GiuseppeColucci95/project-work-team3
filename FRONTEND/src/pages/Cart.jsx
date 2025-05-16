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
            <div className="col-12 col-md-8 cart-products border">
              <h1 className="text-center mt-5 your-cart"><strong>YOUR CART PRODUCTS</strong></h1>
              <div className="row row-cols-1 row-gap-3 my-5">
                {
                  (cart) &&
                  (
                    cart.map(product => (
                      <div key={`${product.name}-product`} className="col">
                        <div className="row d-flex justify-content-center mb-3">
                          <div className="col-2 product-image-cart">
                            <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                              <img src={product.image} alt="image" className="w-100 rounded-4" />
                            </Link>
                          </div>
                          <div className="col-6 d-flex flex-column align-items-start justify-content-between">
                            <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                              <h3 className="mb-0 product-name-cart">{product.name}</h3>
                            </Link>
                            <div className="d-flex align-items-center gap-2 quantity-section">
                              <button onClick={() => removeCartProduct(product)} className="btn-quantity"><i className="bi bi-dash-circle"></i></button>
                              <div id="quantity" className="mx-1">{product.cartQuantity}</div>
                              <button onClick={() => addCartProduct(product)} className="btn-quantity"><i className="bi bi-plus-circle"></i></button>
                            </div>
                            {
                              (product.discount_percentage > 0) ?
                                (
                                  <div>
                                    <span className="me-2 fs-3 fw-semibold"><s>{`${(product.price * product.cartQuantity).toFixed(2)}€`}</s></span>
                                    <span className="me-2 fs-3 fw-semibold">{`${((product.price - product.price * (product.discount_percentage / 100)).toFixed(2) * product.cartQuantity).toFixed(2)}€`}</span>
                                  </div>
                                )
                                :
                                (<h3 className="me-2 fs-3 fw-semibold">{`${(product.price * product.cartQuantity).toFixed(2)}€`}</h3>)
                            }
                          </div>
                        </div>
                      </div>
                    ))
                  )
                }
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column justify-content-start align-items-center pt-4 gap-3 summary border text-center">
              <h3 className="mt-4 order-summary">ORDER SUMMARY</h3>
              <div className="summary-text d-flex flex-column gap-4">
                <h5 className="summary-price"><strong>Total products:</strong> {totalPrice.toFixed(2)}€ </h5>
                <h5 className="summary-price"><strong>Shipping:</strong> {(totalPrice > 39.99) ? ('0.00') : ('9.99')}€ </h5>
                <h5 className="summary-price"><strong>Total order:</strong> {(totalPrice > 39.99) ? (totalPrice.toFixed(2)) : ((totalPrice + 9.99).toFixed(2))}€ </h5>
                <Link to="/checkout">
                  <button type="button" className="btn-checkout mt-2">GO CHECKOUT</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section >
    </>
  );
}