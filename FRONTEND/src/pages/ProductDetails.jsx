//react imports
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect, useState } from "react";

//component exports
export default function ProductDetails() {

  //logic

  //getting dynamic slug param
  const { slug } = useParams();
  //imports from custom context
  const {
    selectedProduct, getSelectedProduct,
    tagProducts, getProductsByTag,
    categoryProducts, getProductsByCategory
  } = useProductContext();
  //use state variables for buttons to expands the results
  const [numberOfRelatedTagProducts, setNumberOfRelatedTagProducts] = useState(4);
  const [numberOfRelatedCategoryProducts, setNumberOfRelatedCategoryProducts] = useState(4);

  useEffect(() => {
    getSelectedProduct(slug);
  }, []);

  //template
  return (
    <>
      {
        (selectedProduct) &&
        (
          <section id="product-description" className="my-5">
            <div className="container w-75">
              <div className="row">
                <div className="col-12 col-xl-6">
                  <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} src={selectedProduct.image} alt={`${selectedProduct.slug} image`} className="w-100 rounded-3" />
                </div>
                {/* IMAGE */}
                <div className="col-12 col-xl-6 d-flex flex-column justify-content-between">
                  <div id="image-description" className="mt-3">
                    <h2>{selectedProduct.name}</h2>
                    <h5>{selectedProduct.description}</h5>
                  </div>

                  <div id="tags">
                    <ul className="list-unstyled">
                      <li>tag 1</li>
                      <li>tag 2</li>
                      <li>tag 3</li>
                    </ul>
                  </div>

                  <div id="buttons" className="mb-3">
                    <div>
                      <h2 className="mb-3">{`${selectedProduct.price}€`}</h2>
                    </div>

                    <div className="d-flex gap-3 justify-content-between">
                      <div className="d-flex justify-content-center align-items-center gap-1">
                        <button className="btn btn-primary">-</button>
                        <div className="px-2">0</div>
                        <button className="btn btn-primary">+</button>
                      </div>
                      <div>
                        <button className="btn btn-primary px-5">ADD TO CART</button>
                      </div>
                      <div>
                        <button className="btn btn-primary">&#9825;</button>
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
          <h2>RELATED PRODUCTS</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus id quidem quod tenetur tempore nobis beatae exercitationem laborum. Sint sed et ad. Incidunt omnis alias beatae libero quas illo doloribus.
          </h4>

          <section id="tag-related-products" className="my-5">
            <h3>TAG RELATED PRODUCTS</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
              {

                (tagProducts) ?
                  (
                    tagProducts.map((product, index) => (
                      (index < numberOfRelatedTagProducts) &&
                      (
                        <div className="col">
                          <img src={product.image} alt="image" className="mb-3 w-100" />
                          <h4>{product.name}</h4>
                          <h6>{`${product.price}€`}</h6>
                        </div>
                      )
                    ))
                  )
                  :
                  (
                    <div>No tag related products found!</div>
                  )
              }

            </div>
          </section>
          {/* TAG RELATED PRODUCTS */}

          <section id="category-related-products" className="my-5">
            <h3>CATEGORY RELATED PRODUCTS</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
              {

                (categoryProducts) ?
                  (
                    categoryProducts.map((product, index) => (
                      (index < numberOfRelatedCategoryProducts) &&
                      (
                        <div className="col">
                          <img src={product.image} alt="image" className="mb-3 w-100" />
                          <h4>{product.name}</h4>
                          <h6>{`${product.price}€`}</h6>
                        </div>
                      )
                    ))
                  )
                  :
                  (
                    <div>No category related products found!</div>
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