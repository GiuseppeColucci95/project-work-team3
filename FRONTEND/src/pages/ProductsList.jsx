//react import
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { Link, useSearchParams } from "react-router-dom";

//component exports
export default function ProductList() {

  //logic
  const [viewMode, setViewMode] = useState('grid');
  const { orderBy, setOrderBy, products, getAllProducts, setSearchChangeFunction, search, setSearch, getSearchedProducts, isChecked, setIsChecked } = useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();

  //useEffect on page start
  useEffect(() => {

    //create an empty object
    const object = {};
    const isChecked = searchParams.get('promotion') ? searchParams.get('promotion') : false;

    //populate the object with searchParams values in the url if presents
    object.q = searchParams.get('q') ? object.q = searchParams.get('q') : '';
    object.category = searchParams.get('category') ? object.category = searchParams.get('category') : '';
    object.tag = searchParams.get('tag') ? object.tag = searchParams.get('tag') : '';
    object.orderby = searchParams.get('orderby') ? object.orderby = searchParams.get('orderby') : '';
    object.order = searchParams.get('order') ? object.order = searchParams.get('order') : '';
    // object.promotion = searchParams.get('promotion') ? object.promotion = searchParams.get('promotion') : '';

    let orderByToSet = '';

    if (object.orderby !== '') {
      if (object.orderby === 'price') {
        (object.order === 'asc') ? orderByToSet = 'ascending price' : orderByToSet = 'descending price'
      } else if (object.orderby === 'name') {
        (object.order === 'asc') ? orderByToSet = 'ascending name' : orderByToSet = 'descending name'
      } else if (object.orderby === 'recents') {
        (object.order === 'asc') ? orderByToSet = 'least recents' : orderByToSet = 'most recents'
      }
    }
    setOrderBy(orderByToSet);
    setIsChecked(isChecked);

    //set the new search with basically searchParams and do the search
    setSearch(object);
    getSearchedProducts(object);
  }, [searchParams]);

  //function to handle select change
  function handleChange(e) {

    setSearchChangeFunction(e.target);

    const object = {};
    if (search.q.length > 0) object.q = search.q;
    if (search.category.length > 0) object.category = search.category;
    if (search.tag.length > 0) object.tag = search.tag;
    if (search.orderby.length > 0) object.orderby = search.orderby;
    if (search.order.length > 0) object.order = search.order;

    setSearchParams(object);
  }

  //template
  return (
    <>
      <section id="all-products" className="pb-5">
        <div className="container">

          <div className="text-center mb-5">
            <h3 >ALL EAT YOUR WAY PRODUCTS</h3>
            <p>Here you can find all our products!</p>
          </div>
          {/* SECTION DESCRIPTION */}

          <div className="row my-3">
            <div className="col-11">
              <div className="row">

                <div className="col-12 mb-2">
                  <span className="me-1">Order by:</span>
                  <select value={orderBy} onChange={handleChange} name="orderby" id="orderby">
                    <option value="">Select an order</option>
                    <option value="ascending price">Ascending price</option>
                    <option value="descending price">Descending price</option>
                    <option value="ascending name">Ascending name</option>
                    <option value="descending name">Descending name</option>
                    <option value="most recents">Most recents</option>
                    <option value="least recents">Least recents</option>
                  </select>
                </div>
                <div className="col-12 mb-2">
                  <span className="me-1">Preference:</span>
                  <select value={search.tag} onChange={handleChange} name="tag" id="tag">
                    <option value="">Select a preference</option>
                    <option value="Lactose free">Lactose free</option>
                    <option value="Sugar free">Sugar free</option>
                    <option value="Gluten free">Gluten free</option>
                    <option value="Nickel free">Nickel free</option>
                    <option value="Nuts free">Nuts free</option>
                    <option value="Fish free">Fish free</option>
                    <option value="Egg free">Egg free</option>
                    <option value="Soy free">Soy free</option>
                    <option value="Shellfish free">Shellfish free</option>
                  </select>
                </div>
                <div className="col-12 mb-2">
                  <div className="me-1">Category:</div>
                  <select value={search.category} onChange={handleChange} name="category" id="category">
                    <option value="">Select a category</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Bakery">Bakery</option>
                  </select>
                </div>
                <div className="col-12 mb-2">
                  <input className="me-1" type="checkbox" checked={isChecked} onChange={handleChange} name="promotion" id="promotion" />
                  <span>In promotion</span>
                </div>
              </div>

            </div>

            <div className="col-1 d-flex align-items-center">
              <button onClick={() => setViewMode('grid')} className="btn btn-primary"><i className="bi bi-grid"></i></button>
              <button onClick={() => setViewMode('list')} className="btn btn-primary"><i className="bi bi-list-task"></i></button>
            </div>
          </div>
          {/* SELECT, GRID AND LIST BUTTONS */}

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
                </div>
              )
          }
        </div>
      </section >
      {/* PRODUCTS SECTION */}
    </>
  );
}