//react and custom context imports
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";

//component exports
export default function Wishlist() {

  //logic
  const { wishlist, setWishlist, getWishlistProducts } = useProductContext();

  //useEffect on component start
  useEffect(() => {
    getWishlistProducts();
  }, []);

  //function to add an element in the cart
  function addProductToCart(productToAdd) {

    //product to add
    console.log('prodotto da aggiornare da aggiungere', productToAdd);

    //check if the product is already in the cart
    const cart = localStorage.getItem('cart');
    const parsedCart = JSON.parse(cart);
    const foundProduct = parsedCart.find(product => {
      return product.name === productToAdd.name;
    });

    //if the product is already in the cart
    if (foundProduct) {
      parsedCart.map(product => {
        if (foundProduct.name === product.name) {
          product.cartQuantity++;
          console.log(product.cartQuantity);

          //modify the order total
          const total = localStorage.getItem('totalPrice');
          let parsedTotal = Number(JSON.parse(total));
          parsedTotal = Number(parsedTotal) + Number(product.price);
          const stringifiedTotalPrice = JSON.stringify(parsedTotal.toFixed(2));
          localStorage.setItem('totalPrice', stringifiedTotalPrice);
        }
      })
      const stringifiedCart = JSON.stringify(parsedCart);
      localStorage.setItem('cart', stringifiedCart);

    } else {
      //if the product is not in the cart add it
      productToAdd.cartQuantity++;
      parsedCart.push(productToAdd);
      const stringifiedCart = JSON.stringify(parsedCart);
      localStorage.setItem('cart', stringifiedCart);

      //modify the order total
      const total = localStorage.getItem('totalPrice');
      let parsedTotal = Number(JSON.parse(total));
      parsedTotal = Number(parsedTotal) + Number(product.price);
      const stringifiedTotalPrice = JSON.stringify(parsedTotal.toFixed(2));
      localStorage.setItem('totalPrice', stringifiedTotalPrice);
    }
  }

  //function to remove an element from wishlist
  function removeProductFromWishlist(productToRemove) {
    const products = localStorage.getItem('wishlist');
    const productsParsed = JSON.parse(products);

    const foundProduct = productsParsed.find(product => {
      return product.name = productToRemove.name;
    });

    productsParsed.splice(productsParsed.indexOf(foundProduct), 1);

    const stringifiedProducts = JSON.stringify(productsParsed);
    localStorage.setItem('wishlist', stringifiedProducts);
  }

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
                        <img src={product.img} alt="image" className="w-100 rounded-4" />
                      </div>
                      <div className="col-6 d-flex flex-column align-items-start justify-content-center">
                        <h3 className="mb-0">{product.name}</h3>
                        <div>{`${product.price}€`}</div>
                        <button onClick={() => addProductToCart(product)} className="btn btn-primary mb-2">ADD TO CART</button>
                        <button onClick={() => removeProductFromWishlist(product)} className="btn btn-primary">REMOVE FROM WISHLIST</button>
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