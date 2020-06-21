import renderTable from '../renderTable';
import sidebarHighlighting from '../../sidebar/sidebarHighlighting';

const cardMainCreate = async (data, name) => {
  const card = document.createElement('a');

  card.classList.add('cardMain');
  card.href = '#';
  const path = require(`../../../assets/${data.image}`);
  card.innerHTML = `<img src=${path.default} alt=${name}>${name}`;

  card.onclick = () => {
    sidebarHighlighting(card.innerText);
    renderTable(name);
  };

  return card;
};

export default cardMainCreate;
