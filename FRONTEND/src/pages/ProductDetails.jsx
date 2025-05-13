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
    wishlist, addCartProduct, removeCartProduct
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
                    <h2>{selectedProduct.name}</h2>
                    <p>{selectedProduct.description}</p>
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
                    <div>
                      <h2 className="mb-1">{`${selectedProduct.price}€`}</h2>
                    </div>

                    <div className="d-flex gap-3 justify-content-start">
                      {/* <div className="d-flex justify-content-center align-items-center gap-1">
                        <button className="btn btn-primary">-</button>
                        <div className="px-2">0</div>
                        <button className="btn btn-primary">+</button>
                      </div> */}
                      <div>
                        <button onClick={() => addCartProduct(selectedProduct)} className="btn-add px-5 me-1">ADD TO CART</button>
                      </div>
                      <div>
                        <button onClick={() => addWishlistProduct(selectedProduct)}
                          className={`${isInWishlist(selectedProduct) ? ('d-none') : ('favourites')}`}>
                          <img className="menu-icons" src="/img/favourites-empty.svg" alt="wishlist icon" />
                        </button>
                        <button onClick={() => removeWishlistProduct(selectedProduct)}
                          className={`${isInWishlist(selectedProduct) ? ('favourites') : ('d-none')}`}>
                          <img className="menu-icons" src="/img/favourites-empty.svg" alt="favourites icon" />
                        </button>
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
{/*           <h2>RELATED PRODUCTS</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus id quidem quod tenetur tempore nobis beatae exercitationem laborum. Sint sed et ad. Incidunt omnis alias beatae libero quas illo doloribus.
          </h4> */}

          <section id="tag-related-products" className="my-5">
            <h3>TAG RELATED PRODUCTS</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
              {

                (tagProducts?.length > 1) ?
                  (
                    tagProducts.map((product, index) => (
                      ((index < numberOfRelatedTagProducts) && (product.name !== selectedProduct.name)) &&
                      (
                        <div key={product.id} className="col">
                          <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                            <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} src={product.image} alt="image" className="w-100 rounded-4" />
                            <h4 className="mt-2">{product.name}</h4>
                            <h6>{`${product.price}€`}</h6>
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
                      ((index < numberOfRelatedCategoryProducts) && (product.name !== selectedProduct.name)) &&
                      (
                        <div key={product.id} className="col">
                          <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                            <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} src={product.image} alt="image" className="w-100 rounded-4" />
                            <h4 className="mt-2">{product.name}</h4>
                            <h6>{`${product.price}€`}</h6>
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