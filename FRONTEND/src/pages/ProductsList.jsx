//react import
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductContext";
import { Link, useSearchParams } from "react-router-dom";

//component exports
export default function ProductList() {

  //logic
  const [viewMode, setViewMode] = useState('grid');
  const { orderBy, setOrderBy, products, getAllProducts, setSearchChangeFunction, search, setSearch, getSearchedProducts } = useProductContext();
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
    object.promotion = searchParams.get('promotion') ? object.promotion = searchParams.get('promotion') : '';

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

    //set the new search with basically searchParams and do the search
    setSearch(object);
    getSearchedProducts(object);
  }, [searchParams]);

  //function to handle select change
  function handleSelectChange(e) {

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

          <div className="mb-5 d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center gap-2">
              Order by:
              <select value={orderBy} onChange={handleSelectChange} name="orderby" id="orderby" className="px-1 me-3">
                <option value="">Select an order</option>
                <option value="ascending price">Ascending price</option>
                <option value="descending price">Descending price</option>
                <option value="ascending name">Ascending name</option>
                <option value="descending name">Descending name</option>
                <option value="most recents">Most recents</option>
                <option value="least recents">Least recents</option>
              </select>
              Tag:
              <select value={search.tag} onChange={handleSelectChange} name="tag" id="tag" className="px-1 me-3">
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
              Category:
              <select value={search.category} onChange={handleSelectChange} name="category" id="category" className="px-1 me-3">
                <option value="">Select a category</option>
                <option value="Snacks">Snacks</option>
                <option value="Beverages">Beverages</option>
                <option value="Bakery">Bakery</option>
              </select>
            </div>

            <div className="d-flex gap-2">
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
                            <div className="row justify-content-start align-items-start">
                              <div className="col-1">
                                <img style={{ objectFit: 'cover', aspectRatio: 0.75 }} className="w-100 rounded-4" src={product.image} alt="image" />
                              </div>
                              <div className="col-11">
                                <h4 className="p-0 m-0">{product.name}</h4>
                                <p className="d-none d-md-block p-0 m-0 text-truncate">{product.description}</p>
                                <h6 className="p-0 m-0">{`${product.price}€`}</h6>
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