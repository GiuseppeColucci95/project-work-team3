//react imports
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//component export
export default function CategoryProductsList() {

  //logic

  //getting dynamic tag param
  const { category } = useParams();
  //imports from custom context
  const { categoryProducts, getProductsByCategory, selectedCategory, getSelectedCategory } = useProductContext();
  const [viewMode, setViewMode] = useState('grid');


  //useEffect to get products on component start
  useEffect(() => {
    getProductsByCategory(category);
    getSelectedCategory(category);
  }, [category]);

  //template
  return (
    <>

      <section id="tag-jumbotron" style={{ backgroundImage: `url('${selectedCategory?.image}')` }}>
        <div className="container">
          <h1 style={{ color: '#fff' }}><strong>{`${selectedCategory?.name}`}</strong></h1>
          <h5 className="pt-3" style={{ color: '#fff' }}>{`${selectedCategory?.description}`}</h5>
        </div>
      </section >
      {/* JUMBOTRON SECTION */}

      <section id="products" className="my-5" >
        <div className="container">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
            {
              (categoryProducts) ?
                (
                  categoryProducts.map(product => (
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
                      </Link>
                    </div>
                  ))
                )
                :
                (
                  <h2>No products found!</h2>
                )
            }
          </div>
        </div>
      </section>
      {/* PRODUCTS SECTION */}
    </>
  );
}