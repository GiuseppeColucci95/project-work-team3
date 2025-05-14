//react imports
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProductContext } from "../contexts/ProductContext";

//component exports
export default function Header() {

  //logic

  //usestate variables
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  //imports from custom context
  const { search, setSearchChangeFunction, getSearchedProducts } = useProductContext();
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  //function to handle submit
  function handleSubmit(e) {
    //prevent the default behavior
    e.preventDefault();

    if (search.q.length > 0) {
      navigate(`/search?q=${search.q}`);
    }
  }

  //function to handle change
  function handleChange(e) {
    console.log(e.target.value);

    setSearchChangeFunction(e.target);
  }

  //template
  return (
    <>
      <header>
        <div className="menu-sx">
          <NavLink className="text-decoration-none active" to={'/'}><img className="logo" src="/img/logo.png" alt="" /></NavLink>
          <ul className="menu">
            <li><NavLink className="text-decoration-none active" to={'/'}>Home</NavLink></li>
            <li
              onMouseEnter={() => handleMouseEnter('pathology')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink className="text-decoration-none active" to={'/search'}>Preferences</NavLink>
              {dropdownOpen === 'pathology' && (
                <ul className="dropdown">
                  <li><NavLink to="/diseases/lactose-free">Lactose free</NavLink></li>
                  <li><NavLink to="/diseases/sugar-free">Sugar free</NavLink></li>
                  <li><NavLink to="/diseases/gluten-free">Gluten free</NavLink></li>
                  <li><NavLink to="/diseases/nickel-free">Nickel free</NavLink></li>
                  <li><NavLink to="/diseases/nuts-free">Nuts free</NavLink></li>
                  <li><NavLink to="/diseases/fish-free">Fish free</NavLink></li>
                  <li><NavLink to="/diseases/egg-free">Egg free</NavLink></li>
                  <li><NavLink to="/diseases/soy-free">Soy free</NavLink></li>
                  <li><NavLink to="/diseases/shellfish-free">Shellfish free</NavLink></li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('category')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink className="text-decoration-none active" to={'/categories'}>Categories</NavLink>
              {dropdownOpen === 'category' && (
                <ul className="dropdown">
                  <li><NavLink to="/categories/sweet-snacks">Sweet Snacks</NavLink></li>
                  <li><NavLink to="/categories/savoury-snacks">Savoury Snacks</NavLink></li>
                  <li><NavLink to="/categories/beverages">Beverages</NavLink></li>
                  <li><NavLink to="/categories/bakery">Bakery</NavLink></li>
                  <li><NavLink to="/categories/spread-creams">Spread Creams</NavLink></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="menu-ce">
          <form onSubmit={handleSubmit} className="onSubmit">
            <input
              onChange={handleChange}
              type="text"
              name="q"
              className="searchbar"
              placeholder="Search your products"
              value={search.q}
            />
            <button type="submit" className="menu-icons search"><img className="icon-search" src="/img/search.svg" alt="search image" /></button>
          </form>
        </div>
        <div className="pos-f-t">
          <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={toggleMenu}></div>
          <div className={`collapse menu-container ${menuOpen ? "show" : ""}`} id="exampleCollapse">
            <div className="bg-light menu-hamburger p-4">
              <ul className="list-unstyled">
                <li><NavLink className="text-decoration-none active" to={'/'}>Home</NavLink></li>
                <div className="dropdown-center">
                  <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Pathology
                  </button>
                  <ul className="dropdown-menu">
                    <li><NavLink to="/diseases/gluten-free">Gluten-free</NavLink></li>
                    <li><NavLink to="/diseases/sugar-free">Sugar-free</NavLink></li>
                    <li><NavLink to="/diseases/lactose-free">Lactose-free</NavLink></li>
                    <li><NavLink to="/diseases/nut-free">Nuts-free</NavLink></li>
                    <li><NavLink to="/diseases/nickel-free">Nickel-free</NavLink></li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </button>
                  <ul className="dropdown-menu">
                    <li><NavLink to="/categories/snacks">Snacks</NavLink></li>
                    <li><NavLink to="/categories/beverages">Beverages</NavLink></li>
                    <li><NavLink to="/categories/bakery">Bakery</NavLink></li>
                  </ul>
                </div>
                <li><Link to={'/wishlist'}>Favourites</Link></li>
                <li><Link to={'/cart'}>Cart</Link></li>
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
              <span className="toggler-icon"><img className="hamburger" src="/img/hamburger.svg" alt="" /></span>
            </button>
          </nav>
        </div>
        <div className="menu-dx">
          <Link to={'/wishlist'}><img className="text-decoration-none active menu-icons wishlist" src="/img/favourites.svg" alt="wishlist image" /></Link>
          <Link to={'/cart'}><img className="text-decoration-none active menu-icons" src="/img/cart.svg" alt="cart image" /></Link>
        </div>
      </header>
    </>
  );
}