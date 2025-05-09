//react imports
import { createContext, useContext, useEffect, useState } from "react";

//context creation
const ProductContext = createContext();

//connection variables
const connection = "http://localhost:3000";
const productsAddress = "/api/v1/products";

//context provider
function ProductProvider({ children }) {

  //logic
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [latestProducts, setLatestProduct] = useState(null);
  const [bestSellersProducts, setBestSellersProducts] = useState(null);

  //function to get all products from db
  function getAllProducts() {

    fetch(connection + productsAddress)
      .then(res => res.json())
      .then(data => {

        console.log(data);
        setProducts(data);
      })
      .catch(err => console.error(err));
  }

  //function to get a selected element by slug
  function getSelectedProduct(slug) {
    console.log(`${connection}${productsAddress}/${slug}`);

    fetch(`${connection}${productsAddress}/${slug}`)
      .then(res => res.json())
      .then(data => {

        setSelectedProduct(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  //function to get all products from db ordered by newest first
  function getLatestProducts() {

    fetch(`${connection}${productsAddress}/recents`)
      .then(res => res.json())
      .then(data => {

        setLatestProduct(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  //function to get all products from db ordered by best sold first
  function getBestSellersProducts() {
    fetch(`${connection}${productsAddress}/best-sellers`)
      .then(res => res.json())
      .then(data => {

        setBestSellersProducts(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  //template
  return (
    <ProductContext.Provider value={{
      products, setProducts, selectedProduct, setSelectedProduct, latestProducts, setLatestProduct, bestSellersProducts,
      setBestSellersProducts, getAllProducts, getSelectedProduct, getLatestProducts, getBestSellersProducts
    }}>
      {children}
    </ProductContext.Provider>
  );
}

//use custom context hook
function useProductContext() {
  return useContext(ProductContext);
}

//export custom context
export { ProductProvider, useProductContext }
