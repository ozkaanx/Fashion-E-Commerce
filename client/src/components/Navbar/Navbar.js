import React, { useEffect, useState, useContext } from "react";
import "./navbar.scss";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="header-top-left">
                <p>Ücretsiz kargo, 30 günlük iade veya geri ödeme garantisi.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="header-top-right">
                <Link to="/cart">
                  <div className="shop-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <div className="shop-count">{cart.length}</div>
                  </div>
                </Link>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg" style={{ maxWidth: 1200 }}>
        <nav className="navbar navbar-expand-lg mt-3">
          <div className="nav-logo">
            <a href="/">
              React<strong>App</strong>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <Link to="/">Home</Link>
              <a href="/product">Shop</a>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="navbar-search">
              <div className="search-icon">
                <i className="fas fa-search"></i>
              </div>
              <input type="text" placeholder="Search"></input>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
