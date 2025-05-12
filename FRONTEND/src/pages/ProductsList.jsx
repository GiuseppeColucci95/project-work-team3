//react import
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

//component exports
export default function ProductList() {

  //logic
  const [viewMode, setViewMode] = useState('grid');
  const { products, getAllProducts } = useProductContext();

  useEffect(() => {
    getAllProducts();
  }, []);

  //template
  return (
    <>
      <section id="jumbotron" className="d-flex align-items-center">
        <div className="container">

          <h2>EAT YOUR WAY ALL PRODUCTS</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima similique dicta id dolorem magnam asperiores eius qui dolor, eos fuga praesentium impedit repellendus. Beatae sint officiis neque magni accusamus iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem sequi porro corporis, rerum placeat aliquam quam iure excepturi maiores nihil necessitatibus dolorem ducimus consectetur veniam molestias quaerat voluptate totam.
          </p>

        </div >
      </section>
      {/* JUMBOTRON SECTION */}

      <section id="all-products" className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h3 >ALL EAT YOUR WAY PRODUCTS</h3>
            <p>Here you can find all out products!</p>
          </div>
          {/* SECTION DESCRIPTION */}

          <div className="mb-5 d-flex justify-content-end gap-2">
            <button onClick={() => setViewMode('grid')} className="btn btn-primary"><i className="bi bi-grid"></i></button>
            <button onClick={() => setViewMode('list')} className="btn btn-primary"><i className="bi bi-list-task"></i></button>
          </div>
          {/* GRID AND LIST BUTTONS */}

          {
            (viewMode === 'grid')
              ?
              (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
                  {
                    (products) &&
                    (
                      products.map(product => (
                        <div key={product.id} className="col">
                          <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                            <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} src={product.image} alt="image" className="w-100 rounded-4" />
                            <h4 className="mt-2">{product.name}</h4>
                            <h6>{`${product.price}€`}</h6>
                          </Link>
                        </div>
                      ))
                    )
                  }

                </div>
              )
              :
              (
                <div className="row row-cols-1 row-gap-4">
                  {
                    (products) &&
                    (
                      products.map(product => (
                        <div key={product.id} className="col">
                          <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                            <div className="row">
                              <div className="col-4">
                                <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} className="w-100 rounded-4" src={product.image} alt="image" />
                              </div>
                              <div className="col-8">
                                <h2>{product.name}</h2>
                                <p className="d-none d-md-block">{product.description}</p>
                                <h4>{`${product.price}€`}</h4>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))
                    )
                  }
                </div>
              )
          }

        </div>
      </section >
      {/* PRODUCTS SECTION */}
    </>
  );
}