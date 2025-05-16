import "./OffcanvasCartStyle.css"
import { useProductContext } from "../../contexts/ProductContext"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function OffcanvasCart({ setOffcanvasCartOpen, offcanvasCartOpen }) {
    const { cart, totalPrice, addCartProduct, removeCartProduct } = useProductContext()
    const [show, setShow] = useState(false)

    //funzione per la chiusura dell'offcanvas
    //ho usato il set time in modo da chiudere l'offcanvas dopo l'animazione
    function handleClose() {
        setShow(false)
        setTimeout(() => setOffcanvasCartOpen(false), 500)
    }

    //function to instant close the offCanvase
    function handleInstantClose() {
        setShow(false);
        setOffcanvasCartOpen(false)
    }

    useEffect(() => {
        if (offcanvasCartOpen) {
            setShow(false)
            //il timer qui serve per prima monta il componente
            //e poi aggiunge la classe ahow per far partire l'animazione
            setTimeout(() => setShow(true), 10)
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
        return () => document.body.classList.remove("overflow-hidden")
    }, [offcanvasCartOpen])

    if (!offcanvasCartOpen) return null

    return (
        <div className="offcanvas_cart d-flex justify-content-end" tabIndex="-1">
            <div className="offcanvas_cart-bg" onClick={handleClose}></div>
            <div className={`offcanvas_cart_container d-flex flex-column${show ? " show" : ""}`}>
                <div className="col offcanvas_cart-header">
                    <h5 className="offcanvas_cart-title text-center pt-4">Your Cart</h5>
                    <button type="button" className="btn-close justify-self-end" onClick={() => handleClose()}></button>
                </div>

                <div className={`col ps-3 ${cart.length > 0 ? "offcanvas_cart-body-scroll" : ""}`}>
                    {
                        cart?.map((product) => (
                            <div key={`${product.name}-product`}>
                                <div className="row mb-3 offcanvas_cart-card align-items-center">
                                    <div className="col-4 offcanvas_cart-image-container">
                                        <Link onClick={handleInstantClose} style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                                            <img src={product.image} alt="image" className="w-100 rounded-4 offcanvas_cart-image" />
                                        </Link>
                                    </div>
                                    <div className="col-8 d-flex flex-column justify-content-center">
                                        <Link onClick={handleInstantClose} style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                                            <h6 className="p-0 product-name-cart text-truncate">{product.name}</h6>
                                        </Link>
                                        <div className="d-flex align-items-center gap-1 ">
                                            <button onClick={() => removeCartProduct(product)} className="offcanvas_cart-button"><i className="bi bi-dash-circle"></i></button>
                                            <div id="offcanvas_cart-quantity" className="px-1">{product.cartQuantity}</div>
                                            <button onClick={() => addCartProduct(product)} className="offcanvas_cart-button"><i className="bi bi-plus-circle"></i></button>
                                        </div>
                                        {
                                            (product.discount_percentage > 0) ?
                                                (
                                                    <div>
                                                        <span className="pe-2 fs-6 fw-semibold"><s>{`${(product.price * product.cartQuantity).toFixed(2)}€`}</s></span>
                                                        <span className="px-2 fs-6 fw-semibold">{`${((product.price - product.price * (product.discount_percentage / 100)).toFixed(2) * product.cartQuantity).toFixed(2)}€`}</span>
                                                    </div>
                                                )
                                                :
                                                (<span className="pe-2 fs-6 fw-semibold">{`${(product.price * product.cartQuantity).toFixed(2)}€`}</span>)
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="col-2 offcanvas_cart-footer d-flex align-items-between pt-3">

                    <div className="col offcanvas_cart-details ps-3">
                        <div className="offcanvas_cart-total d-flex justify-content-start">
                            <p className="offcanvas_cart-total-price mb-0">Shipping: &euro;{(totalPrice > 39.99) ? ('0.00') : ('9.99')}</p>
                        </div>
                        <div className="offcanvas_cart-shipping d-flex justify-content-start">
                            <p className="offcanvas_cart-total-price mb-0">Total: &euro;{totalPrice}</p>
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