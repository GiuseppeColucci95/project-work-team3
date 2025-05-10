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
          <img src="https://picsum.photos/50/50" alt="" />
          <ul className="menu">
            <li className="active"><NavLink className="text-decoration-none text-unstyled" to={'/'}>Home</NavLink></li>
            <li className="active"><NavLink className="text-decoration-none" to={'/products/all'}>Products</NavLink></li>
            <li className="active"><NavLink className="text-decoration-none" to={'/'}>Contacts</NavLink></li>
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
          <img className="menu-icons" src="/img/favourites.svg" alt="" />
          <img className="menu-icons" src="/img/cart.svg" alt="" />
        </div>
      </header>
    </>
  );
}