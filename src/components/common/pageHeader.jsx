import React from "react";
import "./pageHeader.css";


const PageHeader = ({ titleText }) => {
  return (
    <div className="row">
      <div className="col-12 mt-4">
        <h1>{titleText}</h1>
      </div>
    </div>
  );
};

export default PageHeader;