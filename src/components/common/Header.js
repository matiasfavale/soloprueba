import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    
    <nav>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink className="nav-link px-2 text-white" to="/" activeStyle={activeStyle} exact>
                  Home
                </NavLink>
              </li>
            </ul>


            <div className="text-end">
              <NavLink className="btn btn-outline-light me-2" to="/login" activeStyle={activeStyle}>
                Login
              </NavLink>
              <NavLink className="btn btn-warning" to="/register" activeStyle={activeStyle}>
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </nav>
    
    
  )
};


export default Header;
