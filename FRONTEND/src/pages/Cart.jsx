import { useProductContext } from "../contexts/ProductContext";

//component exports
export default function Cart() {

  //logic
  const { cart, removeCartProduct, addCartProduct, totalPrice } = useProductContext();

  //template  
  return (
    <>
      <section id="cart">

        <div className="container">

          <div className="row">
            <div className="col-8">
              <h1 className="text-center">YOUR CART PRODUCTS</h1>
              <div className="row row-cols-1 row-gap-3 my-5">
                {
                  (cart) &&
                  (
                    cart.map(product => (
                      <div key={`${product.name}-product`} className="col">
                        <div className="row d-flex justify-content-center">
                          <div className="col-2">
                            <img src={product.image} alt="image" className="w-100 rounded-4" />
                          </div>
                          <div className="col-6 d-flex flex-column align-items-start justify-content-between">
                            <h3 className="mb-0">{product.name}</h3>
                            <div className="d-flex align-items-center gap-2">
                              <button onClick={() => removeCartProduct(product)} className="btn btn-primary"><i className="bi bi-dash-circle"></i></button>
                              <div id="quantity" className="mx-3">{product.cartQuantity}</div>
                              <button onClick={() => addCartProduct(product)} className="btn btn-primary"><i className="bi bi-plus-circle"></i></button>
                            </div>
                            <h3>{`${(product.price * product.cartQuantity).toFixed(2)}€`}</h3>
                          </div>
                        </div>
                      </div>
                    ))
                  )
                }
              </div>
            </div>
            <div className="col-4 d-flex flex-column justify-content-center">
              <h3>ORDER SUMMARY</h3>
              <h5>Shipping: {(totalPrice > 39.99) ? ('0.00') : ('9,99')}€ </h5>

              <h5>Total products: {totalPrice.toFixed(2)}€ </h5>
              <h5>Total order: {(totalPrice > 39.99) ? (totalPrice.toFixed(2)) : ((totalPrice + 9.99).toFixed(2))}€ </h5>


            </div>
          </div>


        </div>
      </section>
    </>
  );
}