import "./OffcanvasCartStyle.css"
import { useProductContext } from "../../contexts/ProductContext"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function OffcanvasCart({ setOffcanvasCartOpen, offcanvasCartOpen }) {

    const { cart, totalPrice, addCartProduct, removeCartProduct } = useProductContext()
    const [isOpen, setIsOpen] = useState(offcanvasCartOpen)

    function handleClose() {
        setIsOpen(!isOpen)
        setOffcanvasCartOpen(!offcanvasCartOpen)
    }


    return (
        <div className={`offcanvas_cart d-flex justify-content-end ${isOpen ? "" : "hidden"}`} tabIndex="-1">
            <div className="offcanvas_cart-bg" onClick={() => handleClose()}>
            </div>
            <div className="offcanvas_cart_container d-flex flex-column">
                <div className="col offcanvas_cart-header">
                    <h5 className="offcanvas_cart-title text-center pt-4">Your Cart</h5>
                    <button type="button" className="btn-close justify-self-end" onClick={() => handleClose()}></button>
                </div>

                <div className="col offcanvas_cart-body px-2">
                    {
                        cart?.map((product) => (
                            <div key={`${product.name}-product`} className="col">
                                <div className="row mb-2">
                                    <div className="col-2 offcanvas_cart-image">
                                        <img src={product.image} alt="image" className="w-100 rounded-4" />
                                    </div>

                                    <div className="col-9 d-flex flex-column ">
                                        <h6 className="p-0 product-name-cart">{product.name}</h6>
                                        <div className="d-flex align-items-center gap-1 quantity-section ">
                                            <button onClick={() => removeCartProduct(product)} className="offcanvas_cart-button"><i className="bi bi-dash-circle"></i></button>
                                            <div id="offcanvas_cart-quantity" className="mx-1">{product.cartQuantity}</div>
                                            <button onClick={() => addCartProduct(product)} className="offcanvas_cart-button"><i className="bi bi-plus-circle"></i></button>
                                        </div>
                                        {
                                            (product.discount_percentage > 0) ?
                                                (
                                                    <div>
                                                        <span className="fs-6 fw-semibold"><s>{`${(product.price * product.cartQuantity).toFixed(2)}€`}</s></span>
                                                        <span className="fs-6 fw-semibold">{`${((product.price - product.price * (product.discount_percentage / 100)).toFixed(2) * product.cartQuantity).toFixed(2)}€`}</span>
                                                    </div>
                                                )
                                                :
                                                (<h3 className="fs-6 fw-semibold">{`${(product.price * product.cartQuantity).toFixed(2)}€`}</h3>)
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="col offcanvas_cart-footer d-flex flex-column justify-content-center align-items-start">
                    <div className="col offcanvas_cart-dettails">
                        <div className="offcanvas_cart-total d-flex justify-content-around">
                            <h6 className="offcanvas_cart-total-title">Shipping:</h6>
                            <p className="offcanvas_cart-total-price">&euro;{(totalPrice > 39.99) ? ('0.00') : ('9.99')}</p>
                        </div>
                        <div className="offcanvas_cart-total d-flex justify-content-around">
                            <h6 className="offcanvas_cart-total-title">Total:</h6>
                            <p className="offcanvas_cart-total-price">&euro;{totalPrice}</p>
                        </div>
                    </div>
                    <div className="col align-self-center">
                        <Link to="/cart" >
                            <button className="btn-checkout" onClick={() => setOffcanvasCartOpen(!offcanvasCartOpen)}>Go to Cart</button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}