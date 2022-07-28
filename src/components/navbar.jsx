import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
         <div className="container px-4 px-lg-5">
         {!user && (
          <React.Fragment>
          <Link className="navbar-brand" to="/">
            React Project
          </Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          </React.Fragment>
              )}
           {user && (
             <React.Fragment>
                <Link className="navbar-brand" to="/welcome">
                  React Project
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                </React.Fragment>
                )}

          <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
             
                {/* // <React.Fragment> */}
              <li className="nav-item">
              {!user && (
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                 )}
              </li>
              {/* // </React.Fragment> */}
             
              <li className="nav-item">
                {user && user.biz && (
                  <NavLink className="nav-link" to="/create-card">
                    Create New Card
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {user && user.biz && (
                  <NavLink className="nav-link" to="/my-cards">
                    My Cards
                  </NavLink>
                )}
              </li>
            </ul>
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              {!user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">
                      Signin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/biz-signup">
                      Business
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

