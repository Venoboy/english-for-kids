import Card from "./rotatingCard/rotatingCard";
import cards from "../../data/cards";
import cardMainCreate from "./cardMain/cardMainCreate";
import rotatingCard from "./rotatingCard/rotatingCard";
import menuSelector from "../sidebar/menuSelector";


class Table {
  constructor(props) {
    this.props = props;
  }
  async renderTable(categoriesCount) {
    menuSelector();
    const layout = document.getElementById('three-cols-layout');
    const mainWrapper = document.getElementById('wrapper');
    const test = document.getElementById('test');
    const categories = [];
    for (let i = 0; i < categoriesCount; i+=1) {
      categories.push(await rotatingCard(cards[i + 1][0], cards[0][i]))
    }
    layout.append(...categories);


    //test.append(await rotatingCard());
  }
}

export default Table;