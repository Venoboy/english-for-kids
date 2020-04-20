import classes from './_rotatingCard.module.scss';

const rotatingCard = async (data) => {
  let div = document.createElement('div');
  div.classList.add(classes.card);

  const divFront = document.createElement('div');
  divFront.classList.add(classes.front);
  const frontText = document.createElement('div');
  frontText.innerHTML = data.word;
  frontText.classList.add(classes.title);

  const rotateImg = document.createElement('div');
  rotateImg.className = classes.rotate;
  rotateImg.onclick = () => {
    div.style.transform = 'rotateY(180deg)'
  };
  divFront.append(frontText, rotateImg);


  const divBack = document.createElement('div');
  divBack.classList.add(classes.back);
  const backText = document.createElement('div');
  backText.innerHTML = data.translation;
  backText.classList.add(classes.title);
  divBack.append(backText);

  const path = await import(`../../../assets/${data.image}`);

  divFront.style.background = `url(${path.default}) no-repeat`;
  divBack.style.background = `url(${path.default}) no-repeat`;

  divFront.onclick = async (ev) => {
    ev.preventDefault();
    let audio = document.createElement('AUDIO');
    const audioPath = await import(`../../../assets/${data.audioSrc}`);
    audio.src = audioPath.default;
    if (ev.target !== rotateImg) {
      audio.play();
    }
  };

  div.onmouseleave = () => {
    div.style.transform = 'rotateY(0)'
  };

  div.append(divFront, divBack);
  return div;
};

export default rotatingCard;