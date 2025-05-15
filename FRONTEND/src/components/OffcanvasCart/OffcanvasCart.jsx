import "./OffcanvasCartStyle.css"
import { useProductContext } from "../../contexts/ProductContext"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function OffcanvasCart({ setOffcanvasCartOpen, offcanvasCartOpen }) {

    const { cart, totalPrice } = useProductContext()
    const [isOpen, setIsOpen] = useState(offcanvasCartOpen)

    function handleClose() {
        setIsOpen(!isOpen)
        setOffcanvasCartOpen(!offcanvasCartOpen)
    }


    return (
        <div className={`offcanvas_cart d-flex justify-content-end ${isOpen ? "" : "hidden"}`} tabIndex="-1" onClick={() => handleClose()}>
            <div className="offcanvas_cart_container d-flex flex-column">
                <div className="col offcanvas_cart-header">
                    <h5 className="offcanvas_cart-title text-center pt-4">Your Cart</h5>
                    <button type="button" className="btn-close justify-self-end" onClick={() => handleClose()}></button>
                </div>
                <div className="col offcanvas_cart-body px-3">
                    {
                        cart?.map((product) => (
                            <div key={product.id} className="offcanvas_cart-item d-flex justify-content-between my-2">
                                <img src={product.image} alt={product.name} />
                                <h6 className="offcanvas_cart-item-title">{product.name}</h6>
                                {discount_percentage > 0 ?
                                    (<p className="offcanvas_cart-item-price">€{product.price}</p>)
                                    :
                                    (
                                        <div>
                                            <p className="offcanvas_cart-item-price me-2">€{product.price}</p>
                                            <p className="offcanvas_cart-item-discount">{product.price - (product.price * product.discount_percentage / 100)}</p>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="col offcanvas_cart-dettails">
                    <div className="offcanvas_cart-total d-flex justify-content-around">
                        <h6 className="offcanvas_cart-total-title">Total:</h6>
                        <p className="offcanvas_cart-total-price">&euro;{totalPrice}</p>
                    </div>
                </div>
                <div className="col align-self-center">
                    <Link to="/cart" >
                        <button className="btn btn-warning" onClick={() => setOffcanvasCartOpen(!offcanvasCartOpen)}>Go to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}