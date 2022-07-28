import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <div id="portfolio">
<div className="container-fluid p-0">
    <div className="row g-0">
        <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={card.bizImage} title="Project Name">
            <img
          className="p-2"
          src={card.bizImage}
          width="440"
          height="298.66"
          alt={card.bizName}
        />
                <div className="portfolio-box-caption">
                    <div className="project-name">{card.bizName}</div>
                    <div className="project-category text-white-50">{card.bizDescription}</div>
                </div>
                </a>
                <p className="card-text border-top pt-2">
                  <b>Tel: </b>
                  {card.bizPhone}
                  <br />
                  <b>Address: </b>
                  {card.bizAddress}
                </p>
                <Link to={`/my-cards/edit/${card._id}`}><i className="fas fa-edit"></i> Edit </Link> |
                <Link className="ml-2" to={`/my-cards/delete/${card._id}`}>
                <i className="fas fa-minus-circle"></i> Delete 
                </Link>
        </div>
    </div>
</div>
</div> 
  );
};

export default Card;


 



