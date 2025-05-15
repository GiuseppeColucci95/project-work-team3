import "./OffcanvasCartStyle.css"
import { useProductContext } from "../../contexts/ProductContext"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


export default function OffcanvasCart({ setOffcanvasCartOpen, offcanvasCartOpen }) {

    const { cart, totalPrice, addCartProduct, removeCartProduct } = useProductContext()
    const [isOpen, setIsOpen] = useState(offcanvasCartOpen)

    function handleClose() {
        setIsOpen(!isOpen)
        setOffcanvasCartOpen(!offcanvasCartOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
        // Pulizia in caso di smontaggio
        return () => document.body.classList.remove("overflow-hidden")
    }, [isOpen])


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

                                    <div className="col-8 d-flex flex-column ">
                                        <h6 className="p-0 product-name-cart">{product.name}</h6>

                                        <div className="d-flex align-items-center gap-1 ">
                                            <button onClick={() => removeCartProduct(product)} className="offcanvas_cart-button"><i className="bi bi-dash-circle"></i></button>
                                            <div id="offcanvas_cart-quantity" className="px-1">{product.cartQuantity}</div>
                                            <button onClick={() => addCartProduct(product)} className="offcanvas_cart-button"><i className="bi bi-plus-circle"></i></button>
                                        </div>
                                        {
                                            (product.discount_percentage > 0) ?
                                                (
                                                    <div>
                                                        <span className="mt-2 px-2 fs-6 fw-semibold"><s>{`${(product.price * product.cartQuantity).toFixed(2)}€`}</s></span>
                                                        <span className="mt-2 px-2 fs-6 fw-semibold">{`${((product.price - product.price * (product.discount_percentage / 100)).toFixed(2) * product.cartQuantity).toFixed(2)}€`}</span>
                                                    </div>
                                                )
                                                :
                                                (<h3 className="mt-2 px-2 fs-6 fw-semibold">{`${(product.price * product.cartQuantity).toFixed(2)}€`}</h3>)
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="col-2 offcanvas_cart-footer d-flex flex-column align-items-start pt-2">

                    <div className="col offcanvas_cart-details">
                        <div className="offcanvas_cart-total d-flex justify-content-around">
                            <h6 className="offcanvas_cart-total-title">Shipping:</h6>
                            <p className="offcanvas_cart-total-price">&euro;{(totalPrice > 39.99) ? ('0.00') : ('9.99')}</p>
                        </div>
                        <div className="offcanvas_cart-shipping d-flex justify-content-around">
                            <h6 className="offcanvas_cart-total-title">Total:</h6>
                            <p className="offcanvas_cart-total-price">&euro;{totalPrice}</p>
                        </div>
                    </div>

                    <div className="col align-self-center ">
                        <Link to="/cart" >
                            <button className="offcanvas_cart_btn-cart mb-3" onClick={() => setOffcanvasCartOpen(!offcanvasCartOpen)}>Go to Cart</button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}