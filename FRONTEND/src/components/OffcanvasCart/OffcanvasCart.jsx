import "./OffcanvasCartStyle.css"


export default function OffcanvasCart({ setOffcanvasCartOpen, offcanvasCartOpen }) {
    return (
        <div className={offcanvasCartOpen ? "offcanvas_cart" : "offcanvas_cart hidden"} tabIndex="-1" >
            <div className="offcanvas_cart_container">
                <div className="offcanvas_cart-header">
                    <h5 className="offcanvas_cart-title">Cart</h5>
                    <button type="button" className="btn-close" onClick={() => setOffcanvasCartOpen(!offcanvasCartOpen)}></button>
                </div>
                <div className="offcanvas_cart-body">
                    {/* Cart items go here */}
                </div>

            </div>
        </div>
    )
}