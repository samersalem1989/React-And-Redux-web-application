// import React, { Component } from "react";
// import PageHeader from "./common/pageHeader";

// class About extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="container">
//         <PageHeader titleText="About Real App" />
//         <div className="row">
//           <div className="col-12">
//             <p>Content example text for about page here.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default About;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <section className="page-section bg-primary animate__animated animate__fadeIn" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center ">
                        <h2 className="text-black font-weight-bold mt-0 ">We've got all of what you need!</h2>
                        <hr className="divider divider-light" />
                        <p className=" mb-4">Start your career with us can help you build better websites ever! Just sign up and start filling your info, no experience is required!</p>
                        <NavLink className="btn btn-light btn-xl" to="/signup">
                              Get Started!
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default About;