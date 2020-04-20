import Card from "./rotatingCard/rotatingCard";
import cards from "../../data/cards";
import cardMainCreate from "./cardMain/cardMainCreate";
import rotatingCard from "./rotatingCard/rotatingCard";
import menuSelector from "../sidebar/menuSelector";


const renderTable = async (categoryName) => {

  const category = categoryName || 'Main Page';
  console.log(category);
  const categoriesCount = cards[0].length;
  menuSelector();
  const layout = document.getElementById('three-cols-layout');
  const mainWrapper = document.getElementById('wrapper');
  const test = document.getElementById('test');
  const categoriesArr = [];

  if (category === "Main Page") {
    for (let i = 0; i < categoriesCount; i += 1) {
      categoriesArr.push(await cardMainCreate(cards[i + 1][0], cards[0][i]))
    }
  } else {
    const categoryNumber = cards[0].indexOf(category);
    console.log(categoryNumber);
    for (let i = 0; i < categoriesCount; i += 1) {
      categoriesArr.push(await rotatingCard(cards[categoryNumber + 1][i]))
    }
  }
  console.log(categoriesArr);
  layout.innerHTML = '';
  layout.append(...categoriesArr)

};

export default renderTable;