import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <div className="header__search">
        <Link to="/">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div
        className={
          showMediaIcons ? "header__nav__mobile__header__nav" : "header__nav"
        }
      >
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello{user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "sign Out" : "SignIn"}
            </span>
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
            <div className="header__option">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                  {basket.length}
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="dehaze-menu">
          <button onClick={() => setShowMediaIcons(!showMediaIcons)}>
            {showMediaIcons ? <CloseIcon /> : <DehazeIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
