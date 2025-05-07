//react imports
import { createContext, useContext, useState } from "react";

//context creation
const ProductContext = createContext();

//context provider
function ProductProvider({ children }) {

  //logic
  const [products, setProducts] = useState(null);

  //template
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

//use custom context hook
function useProduct() {
  return useContext(ProductContext);
}

//export custom context
export { ProductProvider, useProduct }