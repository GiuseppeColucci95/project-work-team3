//react imports
import { useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

//component export
export default function TagProductsList() {

  //logic

  //getting dynamic tag param
  const { tag } = useParams();
  //imports from custom context
  const { tagProducts, getProductsByTag, selectedTag, getSelectedTag } = useProductContext();

  //useEffect to get products on component start
  useEffect(() => {
    getProductsByTag(tag);
    getSelectedTag(tag);
  }, [tag]);

  //template
  return (
    <>

      <section id="tag-jumbotron" style={{ backgroundImage: `url('${selectedTag?.image}')`, objectFit: 'cover' }}>
        <div className="container">
          <h1 className="pt-5">{`${selectedTag?.name} Products`}</h1>
        </div>
      </section >
      {/* JUMBOTRON SECTION */}

      < section id="products" className="my-5" >
        <div className="container">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-4">
            {
              (tagProducts) ?
                (
                  tagProducts.map(product => (
                    <div key={product.id} className="col" >
                      <Link style={{ color: '#000' }} className="text-decoration-none" to={`/products/${product.slug}`}>
                        <div className="product-img-container">

                          <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} className="w-100 rounded-4 product-img-zoom" src={product.image} alt={`${product.slug} image`} />
                        </div>
                        <h4 className="mt-2">{product.name}</h4>
                        <h6>{`${product.price}€`}</h6>
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
      </ section >
      {/* PRODUCTS SECTION */}
    </>
  );
}