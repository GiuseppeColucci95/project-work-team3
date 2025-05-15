import "./OffcanvasCartStyle.css"


export default function OffcanvasCart({ setOffcanvasCartOpen }) {
    return (
        <div className="offcanvas" tabIndex="-1" onClick={() => setOffcanvasCartOpen(false)}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Cart</h5>
                <button type="button" className="btn-close" onClick={() => setOffcanvasCartOpen(false)}></button>
            </div>
            <div className="offcanvas-body">
                {/* Cart items go here */}
            </div>
        </div>
    )
}