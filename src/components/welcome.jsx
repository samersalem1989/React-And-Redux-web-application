import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <header className="masthead animate__animated animate__fadeIn">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 id="colors"className="font-weight-bold">Welcome To Our Company!</h1>
                        
                    </div>
                    <div id="down"className="col-lg-8 align-self-baseline">
                    <hr className="divider" />
                        <p className=" mb-5">We will teach u everything from the very beginning!</p>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Welcome;

