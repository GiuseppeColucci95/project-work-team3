//react imports
import { createContext, useContext, useEffect, useState } from "react";

//context creation
const ProductContext = createContext();

//connection variables
const connection = "http://localhost:3000";
const productsPath = "/api/v1/products";
const tagsPath = "/api/v1/tags";
const categoriesPath = "/api/v1/categories";
const bestSellersPath = '/best-sellers';
const recentsPath = '/recents';
const tagPath = '/pathologies';
const categoryPath = '/categories';
const searchPath = '/search';

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
  const [orderBy, setOrderBy] = useState('');
  const [search, setSearch] = useState({
    q: '',
    category: '',
    tag: '',
    orderby: '',
    order: '',
    promotion: ''
  });

  // badge cart function
  function getCartQuantity() {
    if (!cart) return 0;
    return cart.reduce((total, product) => total + product.cartQuantity, 0);
  }

  // wishlist function
  function getWishlistQuantity() {
    if (!wishlist) return 0; // Se il carrello è vuoto, restituisci 0
    return wishlist.length;
  }

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
    console.log(`${connection}${tagsPath}/${tag}`);
    fetch(`${connection}${tagsPath}/${tag}`)
      .then(res => res.json())
      .then(data => {

        setSelectedTag(data);
        console.log('related category products', data);
      })
      .catch(err => console.error(err));
  }

  //function to get a selected category
  function getSelectedCategory(category) {
    console.log(`${connection}${categoriesPath}/${category}`);
    fetch(`${connection}${categoriesPath}/${category}`)
      .then(res => res.json())
      .then(data => {

        setSelectedCategory(data);
        console.log('related category products', data);
      })
      .catch(err => console.error(err));
  }

  //function to get wishlist products
  function getWishlistProducts() {

    //get the elements from wishlist
    const products = localStorage.getItem('wishlist');
    const productsParsed = JSON.parse(products);

    console.log('wishlist', productsParsed);

    setWishlist(productsParsed);
  }

  //function to remove an element from wishlist
  function removeWishlistProduct(productToRemove) {

    const products = localStorage.getItem('wishlist');
    const arrayToCheck = JSON.parse(products);

    //find the element to remove
    const foundProduct = arrayToCheck.find(product => {
      return product.name == productToRemove.name;
    });

    arrayToCheck.splice(arrayToCheck.indexOf(foundProduct), 1);
    const stringifiedProducts = JSON.stringify(arrayToCheck);
    localStorage.setItem('wishlist', stringifiedProducts);
    getWishlistProducts();
  }

  //function to add an element in the wishlist
  function addWishlistProduct(productToAdd) {

    //check if the wishlist already exist
    if (wishlist) {
      //if exist try to find the product
      const products = wishlist;
      const found = products.find(product => {
        console.log('find product name', product.name, 'product to add name', productToAdd.name);

        return product.name === productToAdd.name;
      })

      //if already exist 
      if (!found) {
        //otherwise add it in the wishlist
        products.push({
          id: productToAdd.id,
          image: productToAdd.image,
          name: productToAdd.name,
          price: productToAdd.price
        });

        const stringifiedProducts = JSON.stringify(products);
        localStorage.setItem('wishlist', stringifiedProducts);
      }
    } else {
      console.log('LA WISHLIST NON ESISTE');
      //if wishlist does not exist
      //create an empty array and populate it
      const products = [];
      products.push({
        id: productToAdd.id,
        image: productToAdd.image,
        name: productToAdd.name,
        price: productToAdd.price
      });

      //save it in local storage
      const stringifiedProducts = JSON.stringify(products);
      localStorage.setItem('wishlist', stringifiedProducts);
    }

    getWishlistProducts();
  }

  //function to get cart products
  function getCartProducts() {

    //get the elements from cart
    const cart = localStorage.getItem('cart');
    const parsedCart = JSON.parse(cart);

    console.log('cart', parsedCart);

    setCart(parsedCart);
  }

  //function to remove an element from cart
  function removeCartProduct(productToRemove) {
    const products = localStorage.getItem('cart');
    const parsedProducts = JSON.parse(products);

    //find the element to remove
    const foundProduct = parsedProducts.find(product => {
      return product.name == productToRemove.name;
    });

    if (parsedProducts[parsedProducts.indexOf(foundProduct)].cartQuantity > 1) {
      parsedProducts[parsedProducts.indexOf(foundProduct)].cartQuantity--;
    } else {
      parsedProducts.splice(parsedProducts.indexOf(foundProduct), 1);
    }
    let total = JSON.parse(localStorage.getItem('totalPrice'));
    total = Number(total) - Number(productToRemove.price);
    const stringifiedTotalPrice = JSON.stringify(total.toFixed(2));
    localStorage.setItem('totalPrice', stringifiedTotalPrice);
    const stringifiedProducts = JSON.stringify(parsedProducts);
    localStorage.setItem('cart', stringifiedProducts);
    getCartProducts();
    getTotalPrice();
  }

  //function to clear cart and totalPrice
  function clearCartTotalPrice() {

    //clear cart and total price from local storage
    localStorage.removeItem('cart');
    localStorage.removeItem('totalPrice');

    //clear cart and total price
    getCartProducts();
    getTotalPrice();
  }

  //function to add an element to cart
  function addCartProduct(productToAdd) {

    //check if the cart exist in local storage
    if (cart) {
      const cartArray = cart;

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
            total = Number(total) + Number((product.discount_percentage > 0)
              ? (product.price - product.price * (product.discount_percentage / 100)).toFixed(2)
              : (product.price));
            const stringifiedTotalPrice = JSON.stringify(total.toFixed(2));
            localStorage.setItem('totalPrice', stringifiedTotalPrice);
            getTotalPrice();
          }
        })
      } else {
        //if the product is not in the cart add it
        const newProductToAdd = {
          id: productToAdd.id,
          image: productToAdd.image,
          name: productToAdd.name,
          price: ((productToAdd.discount_percentage > 0)
            ? (productToAdd.price - productToAdd.price * (productToAdd.discount_percentage / 100)).toFixed(2)
            : (productToAdd.price)),
          cartQuantity: 1
        };
        cartArray.push(newProductToAdd);
        const stringifiedCart = JSON.stringify(cartArray);
        localStorage.setItem('cart', stringifiedCart);
        getCartProducts();

        //modify the order total
        let total = totalPrice;
        total = Number(total) + Number((productToAdd.discount_percentage > 0)
          ? (productToAdd.price - productToAdd.price * (productToAdd.discount_percentage / 100)).toFixed(2)
          : (productToAdd.price));
        const stringifiedTotalPrice = JSON.stringify(total.toFixed(2));
        localStorage.setItem('totalPrice', stringifiedTotalPrice);
        getTotalPrice();
      }
    } else {
      const cartArray = [];
      //if the product is not in the cart add it
      const newProductToAdd = {
        id: productToAdd.id,
        image: productToAdd.image,
        name: productToAdd.name,
        price: ((productToAdd.discount_percentage > 0)
          ? (productToAdd.price - productToAdd.price * (productToAdd.discount_percentage / 100)).toFixed(2)
          : (productToAdd.price)),
        cartQuantity: 1
      };
      cartArray.push(newProductToAdd);
      const stringifiedCart = JSON.stringify(cartArray);
      localStorage.setItem('cart', stringifiedCart);
      getCartProducts();

      //modify the order total
      let total = totalPrice;
      total = Number(total) + Number((productToAdd.discount_percentage > 0)
        ? (productToAdd.price - productToAdd.price * (productToAdd.discount_percentage / 100)).toFixed(2)
        : (productToAdd.price));
      const stringifiedTotalPrice = JSON.stringify(total.toFixed(2));
      localStorage.setItem('totalPrice', stringifiedTotalPrice);
      getTotalPrice();
    }
  }

  //function to get the total
  function getTotalPrice() {

    //get the total from localStorage and set it in his variable
    const total = localStorage.getItem('totalPrice');
    const parsedTotal = Number(JSON.parse(total));

    console.log('totalPrice', total);

    setTotalPrice(parsedTotal);
  }

  //function to set search variable state and call the fetch function
  function setSearchChangeFunction(target) {

    const objectToSet = search;

    if (target.name === 'orderby') {
      setOrderBy(target.value);
      const nameToSplit = target.value;

      if (nameToSplit === '') {
        objectToSet.order = '';
        objectToSet.orderby = '';
      } else {
        const splitted = nameToSplit.split(' ');
        if (splitted[0] === 'ascending' || splitted[0] === 'least') {
          objectToSet.order = 'asc';
        } else {
          objectToSet.order = 'desc';
        }
        if (splitted[1] === 'price') {
          objectToSet.orderby = 'price';
        } else if (splitted[1] === 'name') {
          objectToSet.orderby = 'name';
        } else {
          objectToSet.orderby = 'recents';
        }
      }
    } else {
      objectToSet[target.name] = target.value;
    }

    console.log('nuovo oggetto ricerca', objectToSet);

    setSearch(objectToSet);
    getSearchedProducts(objectToSet);
  }

  //function to get searched products
  function getSearchedProducts(searchObject) {
    fetch(`${connection}${productsPath}${searchPath}?q=${searchObject.q}&category=${searchObject.category}&tag=${searchObject.tag}&orderby=${searchObject.orderby}&order=${searchObject.order}&promotion=${searchObject.promotion}`)
      .then(res => res.json())
      .then(data => {

        setProducts(data);
      })
      .catch(err => console.error(err));
  }

  //useEffect to get cart and wishlist at page start
  useEffect(() => {
    getWishlistProducts();
    getCartProducts();
    getTotalPrice();
  }, []);

  //template with values to return
  return (
    <ProductContext.Provider value={{
      products, setProducts, getAllProducts, selectedProduct, setSelectedProduct, getSelectedProduct, latestProducts,
      setLatestProduct, getLatestProducts, bestSellersProducts, setBestSellersProducts, getBestSellersProducts,
      tagProducts, setTagProducts, getProductsByTag, categoryProducts, setCategoryProducts, getProductsByCategory,
      selectedTag, setSelectedTag, getSelectedTag, selectedCategory, setSelectedCategory, getSelectedCategory,
      wishlist, setWishlist, getWishlistProducts, removeWishlistProduct, addWishlistProduct, cart, setCart,
      getCartProducts, addCartProduct, removeCartProduct, totalPrice, orderBy, setOrderBy,
      search, setSearch, setSearchChangeFunction, getSearchedProducts, clearCartTotalPrice, getCartQuantity, getWishlistQuantity
    }}>
      {children}
    </ProductContext.Provider>
  );
}

//function to use custom context
function useProductContext() {
  return useContext(ProductContext);
}

//custom context exports
export { ProductProvider, useProductContext }
