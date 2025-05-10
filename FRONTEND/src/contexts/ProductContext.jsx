//react imports
import { createContext, useContext, useEffect, useState } from "react";

//context creation
const ProductContext = createContext();

//connection variables
const connection = "http://localhost:3000";
const productsPath = "/api/v1/products";
const bestSellersPath = '/best-sellers';
const recentsPath = '/recents';
const tagPath = '/pathologies';
const categoryPath = '/categories';

//context provider
function ProductProvider({ children }) {

  //logic
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [latestProducts, setLatestProduct] = useState(null);
  const [bestSellersProducts, setBestSellersProducts] = useState(null);
  const [tagProducts, setTagProducts] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState(null);

  //function to get all products from db
  function getAllProducts() {
    fetch(connection + productsPath)
      .then(res => res.json())
      .then(data => {

        console.log('all products', data);
        setProducts(data);
      })
      .catch(err => console.error(err));
  }

  //function to get a selected element by slug
  function getSelectedProduct(slug) {
    fetch(`${connection}${productsPath}/${slug}`)
      .then(res => res.json())
      .then(data => {

        setSelectedProduct(data);
        console.log('selected product', data);
      })
      .catch(err => console.error(err));
  }

  //function to get all products from db ordered by newest first
  function getLatestProducts() {
    fetch(`${connection}${productsPath}${recentsPath}`)
      .then(res => res.json())
      .then(data => {

        setLatestProduct(data);
        console.log('latest products', data);
      })
      .catch(err => console.error(err));
  }

  //function to get all products from db ordered by best sold first
  function getBestSellersProducts() {
    fetch(`${connection}${productsPath}${bestSellersPath}`)
      .then(res => res.json())
      .then(data => {

        setBestSellersProducts(data);
        console.log('best sellers products', data);
      })
      .catch(err => console.error(err));
  }

  //function to get all products filtered by tag
  function getProductsByTag(tag) {
    fetch(`${connection}${productsPath}${tagPath}/${tag}`)
      .then(res => res.json())
      .then(data => {

        setTagProducts(data);
        console.log('related tag products', data);
      })
      .catch(err => console.error(err));
  }

  //function to get all products filtered by category
  function getProductsByCategory(category) {
    fetch(`${connection}${productsPath}${tagPath}/${category}`)
      .then(res => res.json())
      .then(data => {

        setCategoryProducts(data);
        console.log('related category products', data);
      })
      .catch(err => console.error(err));
  }

  //template
  return (
    <ProductContext.Provider value={{
      products, setProducts, getAllProducts, selectedProduct, setSelectedProduct, getSelectedProduct, latestProducts,
      setLatestProduct, getLatestProducts, bestSellersProducts, setBestSellersProducts, getBestSellersProducts,
      tagProducts, setTagProducts, getProductsByTag, categoryProducts, setCategoryProducts, getProductsByCategory
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
