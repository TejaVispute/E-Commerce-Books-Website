import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components css/Nav.css";
// This is navbar component

function Nav() {
  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bolder fs-2" to="/">Books</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <NavLink style={{ textDecoration: "none", fontWeight: 500 }} className={({ isActive, isPending }) => isActive ? "act" : "blue"} aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink style={{ textDecoration: "none", fontWeight: 500 }} className={({ isActive, isPending }) => isActive ? "act" : "blue"} to="/products">Products</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink style={{ textDecoration: "none", fontWeight: 500 }} className={({ isActive, isPending }) => isActive ? "act" : "blue"} to="/about">About</NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink style={{ textDecoration: "none", fontWeight: 500 }} className={({ isActive, isPending }) => isActive ? "act" : "blue"} to="/contact">Contact</NavLink>
              </li>

            </ul>
            <div className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </div>
          </div>
        </div>
      </nav >
    </div >
  );
}

export default Nav;
