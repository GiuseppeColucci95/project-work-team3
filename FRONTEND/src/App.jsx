//react, context and components imports
import { ProductProvider } from './contexts/ProductContext';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import TagProductsList from './pages/TagProductsList';
import Wishlist from './pages/Wishlist';

//component exports
export default function App() {

  //template
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path='/' Component={Homepage}></Route>
              <Route path='/products/all' Component={ProductsList}></Route>
              <Route path='/products/:slug' Component={ProductDetails}></Route>
              <Route path='/diseases/:tag' Component={TagProductsList}></Route>
              <Route path='/wishlist' Component={Wishlist}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  )
}
