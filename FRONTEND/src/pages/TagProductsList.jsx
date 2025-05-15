//react imports
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//component export
export default function TagProductsList() {

  //logic

  //getting dynamic tag param
  const { tag } = useParams();
  //imports from custom context
  const { tagProducts, getProductsByTag, selectedTag, getSelectedTag } = useProductContext();
  const [viewMode, setViewMode] = useState('grid');


  //useEffect to get products on component start
  useEffect(() => {
    getProductsByTag(tag);
    getSelectedTag(tag);
  }, [tag]);

  //template
  return (
    <>

      <section id="tag-jumbotron" style={{ backgroundImage: `url('${selectedTag?.image}')` }}>
        <div className="container d-flex flex-column align-items-start">
          <h1 style={{ color: '#fff' }}><strong>{`${selectedTag?.name}`}</strong></h1>
          <h5 className="pt-3" style={{ color: '#fff' }}>{`${selectedTag?.description}`}</h5>
        </div>
      </section >
      {/* JUMBOTRON SECTION */}



      <section id="products" className="my-5" >
        <div className="container">
          <div className="d-flex justify-content-end mb-5 gap-2">
            <button onClick={() => setViewMode('grid')} className="btn btn-primary"><i className="bi bi-grid"></i></button>
            <button onClick={() => setViewMode('list')} className="btn btn-primary"><i className="bi bi-list-task"></i></button>
          </div>
          {/* SELECT, GRID AND LIST BUTTONS */}
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
            {
              (tagProducts) ?
                ((viewMode === 'grid')
                  ?
                  ((
                    tagProducts.map(product => (
                      <div key={product.id} className="col" >
                        <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                          <div className="product-img-container">

                            <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} className="w-100 rounded-4 product-img-zoom" src={product.image} alt={`${product.slug} image`} />
                          </div>
                          <h4 className="mt-2">{product.name}</h4>
                          <div className="d-flex gap-3">
                            {
                              (product.discount_percentage > 0)
                                ?
                                (
                                  <div>
                                    <span className="me-2 fs-5"><s>{`${product.price}€`}</s></span>
                                    <span className="fs-5">{`${(product.price - product.price * (product.discount_percentage / 100)).toFixed(2)}€`}</span>
                                  </div>
                                )
                                :
                                (
                                  <span className="fs-5">{`${product.price}€`}</span>
                                )
                            }
                          </div>
                        </Link>
                      </div>
                    ))
                  :
                  (<div className="row row-cols-1 row-gap-4">
                    {
                      (tagProducts) &&
                      (
                        tagProducts.map(product => (
                          <div key={product.id} className="col">
                            <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                              <div className="row justify-content-start align-items-start">
                                <div className="col-1">
                                  <div className="product-img-container">
                                    <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} className="w-100 rounded-4 product-img-zoom" src={product.image} alt="image" />
                                  </div>
                                </div>
                                <div className="col-11">
                                  <h4 className="p-0 m-0">{product.name}</h4>
                                  <p className="d-none d-md-block p-0 m-0 text-truncate">{product.description}</p>
                                  <div className="d-flex gap-3">
                                    {
                                      (product.discount_percentage > 0)
                                        ?
                                        (
                                          <div>
                                            <span className="me-2"><s>{`${product.price}€`}</s></span>
                                            <span>{`${(product.price - product.price * (product.discount_percentage / 100)).toFixed(2)}€`}</span>
                                          </div>
                                        )
                                        :
                                        (
                                          <span>{`${product.price}€`}</span>
                                        )
                                    }
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))
                      )
                    }
                  </div>)
                )
                :
                (
                  <h2>No products found!</h2>
                )
            }
          </div>
        </div>
      </section >
      {/* PRODUCTS SECTION */}
    </>
  );
}