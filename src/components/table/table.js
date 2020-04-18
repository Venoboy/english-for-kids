import Card from "./card/card";
import cards from "../../data/cards";
import cardMainCreate from "./cardMain/cardMainCreate";
import rotatingCard from "./card/rotatingCard";


class Table {
  constructor(props) {
    this.props = props;
  }
  async renderTable(categoriesCount) {
    const layout = document.getElementById('three-cols-layout');
    const mainWrapper = document.getElementById('wrapper');
    const test = document.getElementById('test');
    // const categories = [];
    // for (let i = 0; i < categoriesCount; i+=1) {
    //   categories.push(await cardMainCreate(cards[0][i], cards[i + 1][0]))
    // }
    // layout.append(...categories);

    test.append(rotatingCard());
  }
}

export default Table;