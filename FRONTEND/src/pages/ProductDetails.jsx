//react imports
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect } from "react";

//component exports
export default function ProductDetails() {

  //logic
  const { slug } = useParams();

  const { selectedProduct, getSelectedProduct } = useProductContext();

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
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} src={selectedProduct.image} alt={`${selectedProduct.slug} image`} className="w-100" />
                </div>
                {/* IMAGE */}
                <div className="col-6 d-flex flex-column justify-content-between">
                  <div id="image-description">
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

                  <div id="buttons">
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
                {/* IMAGE DESCRIPTION, PRICE, ADD TO CART */}
              </div>
            </div>
          </section>
        )
      }


      <section id="related-products" className="my-5">
        <div className="container mt-5">
          <h2>RELATED PRODUCTS</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus id quidem quod tenetur tempore nobis beatae exercitationem laborum. Sint sed et ad. Incidunt omnis alias beatae libero quas illo doloribus.
          </h4>

          <div className="row row-gap-3 my-5">
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
            <div className="col-3">
              <img src="https://picsum.photos/300/400" alt="image" className="mb-3 w-100" />
              <h4>Example image title</h4>
              <h6>13,48€</h6>
            </div>
          </div>
        </div>
      </section>
      {/* RELATED PRODUCTS */}
    </>
  );
}