import cards from '../../data/cards';
import cardMainCreate from './cardMain/cardMainCreate';
import rotatingCard from './rotatingCard/rotatingCard';
import menuSelector from '../sidebar/menuSelector';


const renderTable = async (categoryName) => {
  const category = categoryName || 'Main Page';
  const categoriesCount = cards[0].length;
  menuSelector();
  const layout = document.getElementById('three-cols-layout');
  const categoriesArr = [];

  if (category === 'Main Page') {
    for (let i = 0; i < categoriesCount; i += 1) {
      categoriesArr.push(await cardMainCreate(cards[i + 1][0], cards[0][i]));
    }
  } else {
    const categoryNumber = cards[0].indexOf(category);
    for (let i = 0; i < categoriesCount; i += 1) {
      categoriesArr.push(await rotatingCard(cards[categoryNumber + 1][i]));
    }
  }
  layout.innerHTML = '';
  layout.append(...categoriesArr);
};

export default renderTable;
