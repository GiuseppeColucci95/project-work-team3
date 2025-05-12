//react imports
import { Link, NavLink } from "react-router-dom";

//component exports
export default function Header() {

  //logic

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
          <div className="collapse" id="exampleCollapse">
            <div className="bg-light p-4">
              <ul className="list-unstyled">
                <li><NavLink className="text-decoration-none active" to={'/'}>Home</NavLink></li>
                <li><NavLink className="text-decoration-none active" to={'/products/all'}>Products</NavLink></li>
                <li><NavLink className="text-decoration-none active" to={'/'}>Contacts</NavLink></li>
              </ul>
            </div>
          </div>
          <nav className="navbar navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#exampleCollapse"
              aria-controls="exampleCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <div className="menu-dx">
          <Link to={'/wishlist'}><img className="menu-icons" src="/img/favourites.svg" alt="wishlist image" /></Link>
          <Link to={'/cart'}><img className="menu-icons" src="/img/cart.svg" alt="cart image" /></Link>
        </div>
      </header>
    </>
  );
}