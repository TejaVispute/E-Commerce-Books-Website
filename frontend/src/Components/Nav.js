import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components css/Nav.css";
import { useBook } from "../Context/BookContext";
import { useAuth0 } from "@auth0/auth0-react"; //this is for login button
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

// This is navbar component

function Nav() {
  let { searchBook, setSearchBook } = useBook();
  // console.log(searchBook)
  let { user } = useAuth0();

  return (
    <div className="nav-wrapper" style={{ position: "sticky", top: 0, zIndex: "1" }}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2874F0" }}>
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
            <div className="flex">


              {user && <LogoutButton />}
              {!user && <LoginButton />}

              <div>
                <NavLink to="/cart">
                  <i
                    class="fa-solid fa-bag-shopping"
                    style={{ color: "white" }}
                  ></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
