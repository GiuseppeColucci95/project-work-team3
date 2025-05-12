//react imports
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

//component exports
export default function Header() {

  //logic
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  //template
  return (
    <>
      <header>
        <div className="menu-sx">
          <img className="logo" src="/img/logo.png" alt="" />
          <ul className="menu">
            <li><NavLink className="text-decoration-none active" to={'/'}>Home</NavLink></li>
            <li><NavLink className="text-decoration-none active" to={'/products/all'}>Products</NavLink></li>
            <li><NavLink className="text-decoration-none active" to={'/'}>Contacts</NavLink></li>
          </ul>
        </div>
        <div className="menu-ce">
          <form className="onSubmit">
            <input
              type="text"
              className="searchbar"
              placeholder="Search your products"
            />
            <button type="submit" className="menu-icons search"><img className="icon-search" src="/img/search.svg" alt="" /></button>
          </form>
        </div>
        <div className="pos-f-t">
          <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={toggleMenu}></div>
          <div className={`collapse menu-container ${menuOpen ? "show" : ""}`} id="exampleCollapse">
            <div className="bg-light p-4">
              <ul className="list-unstyled">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products/all">Products</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
              </ul>
            </div>
          </div>
          <nav className="navbar navbar-light">
            <button
              className="toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="exampleCollapse"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon"><img className="hamburger" src="/img/hamburger.svg" alt="" srcset="" /></span>
            </button>
          </nav>
        </div>
        <div className="menu-dx">
          <Link to={'/wishlist'}><img className="menu-icons" src="/img/favourites.svg" alt="wishlist image" /></Link>
          <img className="menu-icons" src="/img/cart.svg" alt="cart image" />
        </div>
      </header>
    </>
  );
}