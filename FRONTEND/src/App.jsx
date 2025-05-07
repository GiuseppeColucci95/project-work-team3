//react and context imports
import { ProductProvider } from './contexts/ProductContext';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';

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
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  )
}
