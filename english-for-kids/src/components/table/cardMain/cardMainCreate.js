import renderTable from '../renderTable';
import sidebarHighlighting from '../../sidebar/sidebarHighlighting';
import img from '../../../assets/img/cry.jpg';

const cardMainCreate = async (data, name) => {
  const card = document.createElement('a');

  card.classList.add('cardMain');
  card.href = '#';
  const path = await import(`../../../assets/${data.image}`);
  card.innerHTML = `<img src=${path.default} alt=${name}>${name}`;

  card.onclick = () => {
    sidebarHighlighting(card.innerText);
    renderTable(name);
  };

  return card;
};

export default cardMainCreate;
