import React from "react";
import Form from "./common/form";
import cardService from "../services/cardService";
import { toast } from "react-toastify";



class DeleteCard extends Form {
    state = {
        card: []
      };

  async componentDidMount() {
    const cardId = this.props.match.params.id;
    const { data } = await cardService.getCard(cardId);
    this.setState({ card: data });
    console.log(data)
    console.log(cardId)
  }


  handleDelete = async () => {
    const { card } = this.state;
    console.log(card._id)
    await cardService.deleteCard(card);
    toast("Card is Deleted");
    this.props.history.replace("/my-cards");
  };

  handleCancel = () => {
    this.props.history.push("/my-cards");
  };

  render() {
    const { card } = this.state;
    return (
        <div className="container">
        <div id="portfolio">
        <h2 className="text-danger mt-0 mb-5 d-flex justify-content-center">Are You Sure You Want to Delete Your Card?</h2>
        <div className="container-fluid p-0 d-flex justify-content-center">
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
                  <div id="buttons">
                  <button
                        className="btn btn-primary"
                        onClick={this.handleDelete}
                      >
                        Delete
                      </button>
        
                      <button
                        className="btn btn-secondary ml-2"
                        onClick={this.handleCancel}
                      >
                        Cancel
                      </button>
                      </div>
                </div>
            </div>
        </div>
        </div> 
        </div>
    );
  }
}

export default DeleteCard;



