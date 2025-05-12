//component exports
export default function Wishlist() {

  //logic
  const products = localStorage.getItem('products');
  const productsParsed = JSON.parse(products);
  console.log(productsParsed);

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
                      <div className="col-6 d-flex align-items-start flex-column gap-2">
                        <h3>{product.name}</h3>
                        <button className="btn btn-primary">ADD TO CART</button>
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

    </>
  );
}