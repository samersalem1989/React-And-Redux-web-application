import React, { Component } from "react";
import cardService from "../services/cardService";
import Card from "./card";

class MyCards extends Component {
  state = {
    cards: []
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards: data });
  }

  render() {
    const { cards } = this.state;
    console.log(cards)

    return (
      <div className="container animate__animated animate__fadeIn">
        <div className="d-inline-flex ">
         {cards.length > 0 &&
            cards.map(card => <Card key={card._id} card={card} />)}
        </div>
       </div>
    );
  }
}

export default MyCards;


