import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./header.css";

// images
import logoImg from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>

        <Link to="/login" className="header-btn">
          Войти
        </Link>
      </div>
    </header>
  );
};

export default Header;
