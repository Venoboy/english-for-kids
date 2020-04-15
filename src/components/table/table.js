import Card from "./card/card";
import cards from "../../data/cards";

class Table {
  constructor(props) {
    this.props = props;
  }
  renderTable() {
    const testCard = new Card(cards[1][0]);
    testCard.createCard();
    document.body.innerHTML += 'renderTable';
  }
}

export default Table;