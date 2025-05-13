//react and custom context imports
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";

//component exports
export default function Wishlist() {

  //logic
  const { wishlist, getWishlistProducts, removeWishlistProduct, addCartProduct } = useProductContext();

  //useEffect on component start
  useEffect(() => {
    getWishlistProducts();
  }, []);

  //template
  return (
    <>
      <section id="wishlist">

        <div className="container">
          <h1 className="text-center">YOUR PRODUCT WISHLIST</h1>

          <div className="row row-cols-1 row-gap-3 my-5">
            {
              (wishlist) &&
              (
                wishlist.map(product => (
                  <div key={`${product.name}-product`} className="col">
                    <div className="row d-flex justify-content-center">
                      <div className="col-2">
                        <img src={product.image} alt="image" className="w-100 rounded-4" />
                      </div>
                      <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                        <h3 className="mb-0">{product.name}</h3>
                        <div>{`${product.price}€`}</div>
                        <button onClick={() => addCartProduct(product)} className="btn btn-primary mb-2">ADD TO CART</button>
                        <button onClick={() => removeWishlistProduct(product)} className="btn btn-primary">REMOVE FROM WISHLIST</button>
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