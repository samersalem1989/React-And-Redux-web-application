import React from "react";

const Footer = () => {
  return (
  //  <div>
    <div className="container" id="myfooter">

    <div className="row d-flex justify-content-center">

      <div className="col-md-6">

        <div className="embed-responsive embed-responsive-16by9 mb-4">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/NVaRDQpcKrw"
            allowfullscreen></iframe>
        </div>

      </div>

    </div>

  {/* </div> */}

  <div className="footer-copyright text-center py-3">© 2021 Copyright:
    <a href="https://www.hackampus.com/"> Samer Salem</a>
  </div>
  </div>
  );
};

export default Footer;