import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faSearch, faHamburger} from '@fortawesome/free-solid-svg-icons';
import { useCartStore } from "../store/cart";

import data from "../data.json";
// import { FaSearch, FaHamburger } from "react-icons/fa";
const {header} = data;

export const Header =()=>{
    const {cartItems} = useCartStore()
 return(
    <header className="header">
       <div className="container">

           <div className="header__wrapper">
            
           <Link to="/">
            <img src={header.logo.src} alt={header.logo.alt}/>
        </Link>
        <nav className="nav">
            {header.navLinks.map((item, index)=>(
                <ul key={index} className="nav__list">
                    <li className="nav__item">
                    <Link  to={item.url} className="nav__link" >
                    {item.text}
                </Link>
                    </li>
                </ul>
                
            ))}
        </nav>
        <div className="search-cart">
        <form className="header__search">
           <input className="header__input" type="text" placeholder={header.search.placeholder} />
           <button> <FontAwesomeIcon icon={faSearch} /></button>
        </form>
        <FontAwesomeIcon className="header__toggle" icon={faHamburger} />
        <Link to="/shopping" className="cart-content">
          <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
          <span className="cart-no">{cartItems?.length}</span>
        </Link>
      </div>


           </div>
       </div>
    </header>
 )
}