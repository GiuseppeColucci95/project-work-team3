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

  //usestate variables to use
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [latestProducts, setLatestProduct] = useState(null);
  const [bestSellersProducts, setBestSellersProducts] = useState(null);
  const [tagProducts, setTagProducts] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [wishlist, setWishlist] = useState(null);
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

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
        getProductsByTag(data.tags[0].slug);
        getProductsByCategory(data.categories[0].slug);
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
    fetch(`${connection}${productsPath}${categoryPath}/${category}`)
      .then(res => res.json())
      .then(data => {

        setCategoryProducts(data);
        console.log('related category products', data);
      })
      .catch(err => console.error(err));
  }

  //function to get a selected tag
  function getSelectedTag(tag) {

  }

  //function to get a selected category
  function getSelectedCategory(category) {

  }

  //function to get wishlist products
  function getWishlistProducts() {

    //get the elements from wishlist
    const products = localStorage.getItem('wishlist');
    const productsParsed = JSON.parse(products);

    setWishlist(productsParsed);
  }

  //function to remove an element from wishlist
  function removeWishlistProduct(productToRemove) {

    //copy products array
    const array = wishlist;

    //find the element to remove
    const foundProduct = array.find(product => {
      return product.name = productToRemove.name;
    });

    array.splice(array.indexOf(foundProduct), 1);
    const stringifiedProducts = JSON.stringify(array);
    localStorage.setItem('wishlist', stringifiedProducts);
    getWishlistProducts();
  }

  //function to add an element in the wishlist
  function addWishlistProduct(productToAdd) {

    //get the elements from wishlist
    const products = localStorage.getItem('wishlist');
    const productsParsed = JSON.parse(products);

    //construct the element to add

    const productsModified = products;
    productsModified

    console.log(productToAdd);

  }

  //function to get cart products
  function getCartProducts() {

    //get the elements from cart
    const cart = localStorage.getItem('cart');
    const parsedCart = JSON.parse(cart);

    setCart(parsedCart);
  }

  //function to add an element to cart
  function addCartProduct(productToAdd) {
    //product to add
    console.log('prodotto da aggiornare da aggiungere', productToAdd);

    //check if the product is already in the cart
    getCartProducts();
    const cartArray = JSON.parse(localStorage.getItem('cart'));

    const foundProduct = cartArray.find(product => {
      return product.name === productToAdd.name;
    });

    //if the product is already in the cart
    if (foundProduct) {
      //modify his quantity by summing 1
      cartArray.map(product => {
        if (foundProduct.name === product.name) {
          product.cartQuantity++;

          //set the new cart
          const stringifiedCart = JSON.stringify(cartArray);
          localStorage.setItem('cart', stringifiedCart);
          getCartProducts();

          //modify the order total
          let total = totalPrice;
          total = Number(total) + Number(product.price);
          const stringifiedTotalPrice = JSON.stringify(total.toFixed(2));
          localStorage.setItem('totalPrice', stringifiedTotalPrice);
          getTotalPrice();
        }
      })
    } else {
      //if the product is not in the cart add it
      productToAdd.cartQuantity++;
      cartArray.push(productToAdd);
      const stringifiedCart = JSON.stringify(cartArray);
      localStorage.setItem('cart', stringifiedCart);
      getCartProducts();

      //modify the order total
      let total = totalPrice;
      total = Number(total) + Number(productToAdd.price);
      const stringifiedTotalPrice = JSON.stringify(parsedTotal.toFixed(2));
      localStorage.setItem('totalPrice', stringifiedTotalPrice);
      getTotalPrice();
    }
  }

  //function to get the total
  function getTotalPrice() {

    //get the total from localStorage and set it in his variable
    const total = localStorage.getItem('totalPrice');
    const parsedTotal = Number(JSON.parse(total));

    setTotalPrice(parsedTotal);
  }

  //template
  return (
    <ProductContext.Provider value={{
      products, setProducts, getAllProducts, selectedProduct, setSelectedProduct, getSelectedProduct, latestProducts,
      setLatestProduct, getLatestProducts, bestSellersProducts, setBestSellersProducts, getBestSellersProducts,
      tagProducts, setTagProducts, getProductsByTag, categoryProducts, setCategoryProducts, getProductsByCategory,
      selectedTag, setSelectedTag, getSelectedTag, selectedCategory, setSelectedCategory, getSelectedCategory,
      wishlist, setWishlist, getWishlistProducts, removeWishlistProduct, addWishlistProduct, cart, setCart, getCartProducts, addCartProduct
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
