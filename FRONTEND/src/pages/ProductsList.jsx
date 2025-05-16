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

    //populate the object with searchParams values in the url if presents
    object.q = searchParams.get('q') ? object.q = searchParams.get('q') : '';
    object.category = searchParams.get('category') ? object.category = searchParams.get('category') : '';
    object.tag = searchParams.get('tag') ? object.tag = searchParams.get('tag') : '';
    object.orderby = searchParams.get('orderby') ? object.orderby = searchParams.get('orderby') : '';
    object.order = searchParams.get('order') ? object.order = searchParams.get('order') : '';
    object.promotion = searchParams.get('promotion') ? true : false;
    // object.promotion = searchParams.get('promotion') ? object.promotion = searchParams.get('promotion') : '';
    console.log('object promotion', object.promotion);

    let orderByToSet = '';
    const isChecked = object.promotion ? object.promotion : false;
    console.log('ischecked', isChecked);

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
    if (search.promotion) object.promotion = search.promotion;

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

          <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 row-gap-3 mb-5">

            <div className="col d-flex align-items-center">
              <label htmlFor="orderby" className="form-label me-1 pb-0">Order:</label>
              <select
                className="form-select select-fixed"
                value={orderBy}
                onChange={handleChange}
                name="orderby"
                id="orderby"
              >
                <option value="">Select an order</option>
                <option value="ascending price">Ascending price</option>
                <option value="descending price">Descending price</option>
                <option value="ascending name">Ascending name</option>
                <option value="descending name">Descending name</option>
                <option value="most recents">Most recents</option>
                <option value="least recents">Least recents</option>
              </select>
            </div>
            {/* ORDER BY SELECT */}
            <div className="col d-flex align-items-center">
              <label htmlFor="tag" className="form-label pb-0 me-1">Preference:</label>
              <select
                className="form-select select-fixed"
                value={search.tag}
                onChange={handleChange}
                name="tag"
                id="tag"
              >
                <option value="">Select a preference</option>
                <option value="lactose free">Lactose free</option>
                <option value="sugar free">Sugar free</option>
                <option value="gluten free">Gluten free</option>
                <option value="nickel free">Nickel free</option>
                <option value="nuts free">Nuts free</option>
                <option value="fish free">Fish free</option>
                <option value="egg free">Egg free</option>
                <option value="soy free">Soy free</option>
                <option value="shellfish free">Shellfish free</option>
              </select>
            </div>
            {/* TAG SELECT */}
            <div className="col d-flex align-items-center">
              <label htmlFor="category" className="form-label pb-0 me-1">Category:</label>
              <select
                className="form-select select-fixed"
                value={search.category}
                onChange={handleChange}
                name="category"
                id="category">
                <option value="">Select a category</option>
                <option value="sweet snacks">Sweet Snacks</option>
                <option value="savoury snacks">Savoury Snacks</option>
                <option value="bakery">Bakery</option>
                <option value="beverages">Beverages</option>
                <option value="spread creams">Spread Creams</option>
              </select>
            </div>
            {/* CATEGORY SELECT */}
            <div className="col d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <input type="checkbox" checked={isChecked} onChange={handleChange} name="promotion" id="promotion" />
                <label className="form-check-label" htmlFor="promotion">Discounted only</label>
              </div>
              {/* CHECKBOX */}

              <div className="d-flex gap-1">
                <button onClick={() => setViewMode('grid')} className="btn-add button-grid"><i className="bi bi-grid"></i></button>
                <button onClick={() => setViewMode('list')} className="btn-add button-list"><i className="bi bi-list-task"></i></button>
              </div>
              {/* GRID AND LIST BUTTONS */}
            </div>
            {/* CHECKBOX AND GRID BUTTONS */}

          </div>
          {/* SELECT, GRID AND LIST BUTTONS */}

          {
            (products && products.length > 0) ? (
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
            )
              :
              (
                <div className="col-12 d-flex align-items-center flex-column text-center py-5 mx-auto">
                  <span style={{ fontSize: "3rem", color: "#6366f1" }}>🔍</span>
                  <h3 className="mt-3">No products found!</h3>
                  <p>Try to change your search.</p>
                </div>
              )
          }
        </div>
      </section >
      {/* PRODUCTS SECTION */}
    </>
  );
}