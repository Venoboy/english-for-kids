

const cardMainCreate = async (name, data) => {
  const card = document.createElement('a');

  card.classList.add('cardMain');
  card.href = '#';
  console.log(data);
  const path = await import(`../../../assets/${data.image}`);
  card.innerHTML = `<img src=${path.default} alt=${name}>${name}`;

  return card;
};

export default cardMainCreate;