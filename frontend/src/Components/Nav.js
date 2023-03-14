import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components css/Nav.css";
import { useBook } from "../Context/BookContext";
import { useAuth0 } from "@auth0/auth0-react"; //this is for login button
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

// This is navbar component

function Nav({ authenticatedUser }) {
  // console.log(authenticatedUser)
  let { setSearchBook, cart } = useBook();

  let { user } = useAuth0();
  // console.log(user.email)
  // total cat items

  // let totalItems = cart.reduce((accum, currval) => accum.quantity + currval.quantity)
  // console.log(totalItems)
  return (
    <div className="nav-wrapper" style={{ position: "sticky", top: 0, zIndex: "1" }}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#FECA52" }}>
        <div className="container">
          <Link style={{ color: "white" }} className="navbar-brand fw-bolder fs-2" to="/">
            Bookers
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item mx-2">
                <NavLink
                  style={{ textDecoration: "none", fontWeight: 500 }}
                  className={({ isActive, isPending }) =>
                    isActive ? "act" : "blue"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  style={{ textDecoration: "none", fontWeight: 500 }}
                  className={({ isActive, isPending }) =>
                    isActive ? "act" : "blue"
                  }
                  to="/allbooks"
                >
                  Products
                </NavLink>
              </li>
              {/* <li className="dropdown">

                <span style={{ fontSize: "1.1rem", fontWeight: 500 }} className={({ isActive, isPending }) =>
                  isActive ? "act" : "blue"
                } >Categories</span>
                <div class="dropdown-content">
                  <Link to="/">Novels</Link>
                  <Link to="/">Comics</Link>
                  <Link to="/">Hinduism</Link>
                </div>

              </li> */}
              <li className="nav-item mx-2">
                <NavLink
                  style={{ textDecoration: "none", fontWeight: 500 }}
                  className={({ isActive, isPending }) =>
                    isActive ? "act" : "blue"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink
                  style={{ textDecoration: "none", fontWeight: 500 }}
                  className={({ isActive, isPending }) =>
                    isActive ? "act" : "blue"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>


            </ul>
            <div
              className="d-flex me-1"
              role="search"
              style={{ color: "white" }}
            >
              <input
                className="form-control me-2"
                onChange={(e) => setSearchBook(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="flex login-cart-icon-wrapper">

              <div className="cart-icon-wrapper">

                <NavLink to="/cart" style={{ textDecoration: "none" }}>
                  <i
                    class="fa-solid fa-bag-shopping"
                    style={{ color: "white" }}
                  ></i>
                  <span className="upper-cart-count badge  rounded-pill">
                    {cart.length === 0 ? 0 : cart.length}
                  </span>
                </NavLink>
              </div>


              <div>
                <div className="dropdown text-end " >
                  <Link className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={user ? user.picture : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} alt="mdo" width="32" height="32" class="rounded-circle" />
                  </Link>

                  <ul className="dropdown-menu text-small">

                    <li className="dropdown-item">  {user ? ("Welcome " + user.name) : null}</li>
                    <li><Link className="dropdown-item" >Settings</Link></li>
                    <li><Link className="dropdown-item" >Profile</Link></li>
                    <li>
                      {user ? <LogoutButton /> : <LoginButton />}
                    </li>


                  </ul>


                </div>
                {/* {user && <LogoutButton />}
                {!user && <LoginButton />} */}
              </div>

            </div>
          </div>
        </div>
      </nav >
    </div >
  );
}

export default Nav;
