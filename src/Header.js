import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import  ShoppingBasketIcon  from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

const Header = () => {
const[{basket, user}]=useStateValue();
 const login =()=>{
  if(user){
    auth.signOut();
  }
 }
  return (
    <nav className='header'>
      <div className="header__search">
      <Link to="/">
        <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      <input type="text" className="header__searchInput" />
     <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user &&"/login"}className="header__link">

          <div  onClick={login}className ="header__option">
            <span className="header__optionLineOne">Hello{user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'sign Out' : 'SignIn'}</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
<div>
  <Link to="/checkout" className="header__link">
    <div className="header__optionBasket">
      <ShoppingBasketIcon />
      <span className="header__optionLineTwo header__basketCount">
        {basket.length}
        </span>
    </div>
  </Link>
</div>
      </div>
       
    </nav>
  )
}

export default Header