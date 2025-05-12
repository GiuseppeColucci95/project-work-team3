//component exports
export default function Wishlist() {

  //logic

  //get the elements from wishlist
  const products = localStorage.getItem('wishlist');
  const productsParsed = JSON.parse(products);
  console.log(productsParsed);

  //function to add an element in the cart
  function addProductToCart(product) {

    //product to add
    console.log('prodotto da aggiornare da aggiungere', product);

    //check if the product is already in the cart
    const cart = localStorage.getItem('cart');
    const parsedCart = JSON.parse(cart);

    const stringifiedProductToAdd = JSON.stringify(productToAdd);
    localStorage.setItem('cart', stringifiedProductToAdd);
  }

  //template
  return (
    <>
      <section id="wishlist">

        <div className="container">
          <h1 className="text-center">YOUR PRODUCT WISHLIST</h1>

          <div className="row row-cols-1 row-gap-3 my-5">
            {
              (productsParsed) &&
              (
                productsParsed.map(product => (
                  <div key={`${product.name}-product`} className="col">
                    <div className="row d-flex justify-content-center">
                      <div className="col-2">
                        <img src={product.img} alt="image" className="w-100 rounded-4" />
                      </div>
                      <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                        <h3 className="mb-0">{product.name}</h3>
                        <div>{`${product.price}€`}</div>
                        <button onClick={() => addProductToCart(product)} className="btn btn-primary mb-2">ADD TO CART</button>
                        <button className="btn btn-primary">REMOVE FROM WISHLIST</button>
                      </div>
                    </div>
                  </div>
                ))
              )
            }
          </div>
        </div>
      </section>
      {/* WISHLIST SECTION */}
    </>
  );
}