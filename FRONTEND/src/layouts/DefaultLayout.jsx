//imports
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

//component exports
export default function DefaultLayout() {

  //logic
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  //template
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}