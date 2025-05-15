//react imports
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//component exports
export default function ProductDetails() {

  //logic

  //getting dynamic slug param
  const { slug } = useParams();
  //imports from custom context
  const {
    selectedProduct, getSelectedProduct,
    tagProducts, getProductsByTag,
    categoryProducts, getProductsByCategory,
    addWishlistProduct, removeWishlistProduct,
    wishlist, addCartProduct, removeCartProduct,
    cart
  } = useProductContext();
  //use state variables for buttons to expands the results
  const [numberOfRelatedTagProducts, setNumberOfRelatedTagProducts] = useState(4);
  const [numberOfRelatedCategoryProducts, setNumberOfRelatedCategoryProducts] = useState(4);

  //useEffect on page start
  useEffect(() => {
    getSelectedProduct(slug);
  }, [slug]);

  //function to check if a product is in wishlist
  function isInWishlist(selectedProduct) {
    console.log('wishlist', wishlist);

    if (wishlist) {
      if (wishlist.length > 0) {

        const nameToCheck = selectedProduct.name;
        const isInWishlist = wishlist.find(product => {
          return product.name == nameToCheck;
        })
        if (isInWishlist) return true;
      }
    } else {
      return false;
    }
    return false;
  }

  //function to check if the product is in cart
  function isIncart(selectedProduct) {
    console.log('cart', cart);

    if (cart) {
      if (cart.length > 0) {

        const nameToCheck = selectedProduct.name;
        const isInCart = cart.find(product => {
          return product.name === nameToCheck;
        })
        if (isInCart) return isInCart;
      }
    } else {
      return false;
    }
    return false;
  }

  //template
  return (
    <>
      {
        (selectedProduct) &&
        (
          <section id="product-description">
            <div className="container product-container">
              <div className="row product-image">
                <div className="col-12 col-xl-6">
                  <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} src={selectedProduct.image} alt={`${selectedProduct.slug} image`} className="w-100 rounded-3 product-img" />
                </div>
                {/* IMAGE */}
                <div className="col-12 col-xl-6 d-flex flex-column justify-content-between">
                  <div id="image-description" className="mt-3">
                    <h2 id="product-title">{selectedProduct.name}</h2>
                    <p id="product-text">{selectedProduct.description}</p>
                  </div>

                  <div id="tags">
                    <ul className="list-unstyled">
                      {
                        selectedProduct.tags.map(tag => (
                          <li key={`${tag.name}-tag`}><img className="check-icon" src="/img/check.svg" alt="check icon" />{` ${tag.name}`}</li>
                        ))
                      }
                    </ul>
                  </div>

                  <div id="buttons" className="mb-3">
                    <div className="d-flex gap-3">
                      {
                        (selectedProduct.discount_percentage > 0)
                          ?
                          (
                            <div>
                              <span className="me-2 fs-1 fw-semibold"><s>{`${selectedProduct.price}€`}</s></span>
                              <span className="me-2 fs-1 fw-semibold">{`${(selectedProduct.price - selectedProduct.price * (selectedProduct.discount_percentage / 100)).toFixed(2)}€`}</span>
                            </div>
                          )
                          :
                          (
                            <span className="me-2 fs-1 fw-semibold">{`${selectedProduct.price}€`}</span>
                          )
                      }
                    </div>

                    <div className="row mt-3">
                      <div className="col-1 col-md-2 d-flex align-items-center">
                        <div>
                          <button onClick={() => addWishlistProduct(selectedProduct)}
                            className={`${isInWishlist(selectedProduct) ? ('d-none') : ('favourites')}`}>
                            <img className="menu-icons add-wishlist" src="/img/favourites-empty.svg" alt="wishlist icon" />
                          </button>
                          <button onClick={() => removeWishlistProduct(selectedProduct)}
                            className={`${isInWishlist(selectedProduct) ? ('favourites') : ('d-none')}`}>
                            <img className="menu-icons add-wishlist" src="/img/favourites-full.svg" alt="favourites icon" />
                          </button>
                        </div>
                      </div>
                      <div className="col-5">
                        {
                          (isIncart(selectedProduct))
                            ?
                            (<div className="row d-flex align-items-center quantity-section">
                              <div className="col-4 p-0">
                                <button onClick={() => removeCartProduct(selectedProduct)} className="text-dark favourites"><i className="bi bi-dash-circle"></i></button>
                              </div>
                              <div className="col-2 d-flex align-items-center">
                                <div id="quantity">{isIncart(selectedProduct).cartQuantity}</div>
                              </div>
                              <div className="col-4 p-0">
                                <button onClick={() => addCartProduct(selectedProduct)} className="text-dark favourites"><i className="bi bi-plus-circle"></i></button>
                              </div>
                            </div>)
                            :
                            (<button onClick={() => addCartProduct(selectedProduct)} className="btn-add me-1">ADD TO CART</button>)
                        }
                      </div>
                    </div>
                  </div>
                </div>
                {/* IMAGE NAME, PRICE, ADD TO CART */}


              </div>
            </div>
          </section>
        )
      }
      {/* PRODUCT DETAILS */}

      <section id="related-products" className="my-5">
        <div className="container mt-5">

          <section id="tag-related-products" className="my-5">
            <h3>TAG RELATED PRODUCTS</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
              {

                (tagProducts?.length > 1) ?
                  (
                    tagProducts.map((product, index) => (
                      ((index < numberOfRelatedTagProducts) && (product?.name !== selectedProduct?.name)) &&
                      (
                        <div key={product.id} className="col">
                          <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                            <div className="product-img-container">
                              <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} src={product.image} alt="image" className="w-100 rounded-4 product-img-zoom" />
                            </div>
                            <h4 className="mt-2">{product.name}</h4>
                            <div className="d-flex gap-3">
                              {
                                (product.discount_percentage > 0)
                                  ?
                                  (
                                    <div>
                                      <span className="product-price me-2"><s>{`${product.price}€`}</s></span>
                                      <span className="product-price">
                                        {`${(product.price - product.price * (product.discount_percentage / 100)).toFixed(2)}€`}
                                      </span>
                                    </div>
                                  )
                                  :
                                  (
                                    <span className="product-price">{`${product.price}€`}</span>
                                  )
                              }
                            </div>
                          </Link>
                        </div>
                      )
                    ))
                  )
                  :
                  (
                    <div className="w-100">No tag related products found!</div>
                  )
              }

            </div>
          </section>
          {/* TAG RELATED PRODUCTS */}

          <section id="category-related-products" className="my-5">
            <h3>CATEGORY RELATED PRODUCTS</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
              {

                (categoryProducts?.length > 1) ?
                  (
                    categoryProducts.map((product, index) => (
                      ((index < numberOfRelatedCategoryProducts) && (product?.name !== selectedProduct?.name)) &&
                      (
                        <div key={product.id} className="col">
                          <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                            <div className="product-img-container">
                              <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} src={product.image} alt="image" className="w-100 rounded-4 product-img-zoom" />
                            </div>
                            <h4 className="mt-2">{product.name}</h4>
                            <div className="d-flex gap-3">
                              {
                                (product.discount_percentage > 0)
                                  ?
                                  (
                                    <div>
                                      <span className="product-price me-2"><s>{`${product.price}€`}</s></span>
                                      <span className="product-price">
                                        {`${(product.price - product.price * (product.discount_percentage / 100)).toFixed(2)}€`}
                                      </span>
                                    </div>
                                  )
                                  :
                                  (
                                    <span className="product-price">{`${product.price}€`}</span>
                                  )
                              }
                            </div>
                          </Link>
                        </div>
                      )
                    ))
                  )
                  :
                  (
                    <div className="w-100">No category related products found!</div>
                  )
              }

            </div>
          </section>
          {/* CATEGORY RELATED PRODUCTS */}

        </div>
      </section>
      {/* RELATED PRODUCTS */}
    </>
  );
}