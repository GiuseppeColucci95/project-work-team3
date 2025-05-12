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
        <div className="menu-dx">
          <Link to={'/wishlist'}><img className="menu-icons" src="/img/favourites.svg" alt="wishlist image" /></Link>
          <img className="menu-icons" src="/img/cart.svg" alt="cart image" />
        </div>
      </header>
    </>
  );
}