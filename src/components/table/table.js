import Card from "./card/card";
import cards from "../../data/cards";
import cardMainCreate from "./cardMain/cardMainCreate";


class Table {
  constructor(props) {
    this.props = props;
  }
  async renderTable(categoriesCount) {
    const wrapper = document.getElementById('three-cols-layout');
    const categories = [];
    for (let i = 0; i < categoriesCount; i+=1) {
      categories.push(await cardMainCreate(cards[0][i], cards[i + 1][0]))
    }
    //const cardMain = await cardMainCreate(cards[0][0], cards[1][8]);
    //console.log(categories);
    wrapper.append(...categories);
    // const testCard = new Card(cards[1][0]);
    // testCard.createCard();
  }
}

export default Table;