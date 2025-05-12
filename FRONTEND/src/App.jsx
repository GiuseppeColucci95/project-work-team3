//react, context and components imports
import { ProductProvider } from './contexts/ProductContext';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import Homepage from './pages/Homepage';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import TagProductsList from './pages/TagProductsList';
import CategoryProductsList from './pages/CategoryProductsList';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Accessibility from "./pages/Accessibility";
import AboutUs from "./pages/AboutUs";
import OurMission from "./pages/OurMission";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Contacts from "./pages/Contacts";
import Shipping from "./pages/Shipping";
import ReturnPolicy from "./pages/ReturnPolicy";
import FAQs from "./pages/FAQs";

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
              <Route path='/category/:category' Component={CategoryProductsList}></Route>
              <Route path='/wishlist' Component={Wishlist}></Route>
              <Route path='/cart' Component={Cart}></Route>
              <Route path='/checkout' Component={Checkout}></Route>
              <Route path='/order-confirmation' Component={OrderConfirmation}></Route>
              <Route path="/privacy-policy" Component={PrivacyPolicy} />
              <Route path="/terms-of-service" Component={TermsOfService} />
              <Route path="/cookie-policy" Component={CookiePolicy} />
              <Route path="/accessibility" Component={Accessibility} />
              <Route path="/about-us" Component={AboutUs} />
              <Route path="/our-mission" Component={OurMission} />
              <Route path="/careers" Component={Careers} />
              <Route path="/press" Component={Press} />
              <Route path="/contacts" Component={Contacts} />
              <Route path="/shipping" Component={Shipping} />
              <Route path="/return-policy" Component={ReturnPolicy} />
              <Route path="/faqs" Component={FAQs} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  )
}
