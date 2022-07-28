import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <header className="masthead animate__animated animate__fadeIn">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-black font-weight-bold ">Your Favorite Place For Starting Your Career</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="mb-5">Start your career with us can help you build better websites ever! Just sign up and start filling your info, no experience is required!</p>
                           <NavLink className="btn btn-primary btn-xl" to="/about">
                                Find Out More
                           </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Home;

