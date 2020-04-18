import img from '../../../assets/img/cry.jpg'
import rotatePng from '../../../assets/img/rotate.png';
import classes from './_rotatingCard.module.scss';

const rotatingCard = () => {
  let div = document.createElement('div');
  div.classList.add(classes.card);

  const divFront = document.createElement('div');
  divFront.classList.add(classes.front);
  const frontText = document.createElement('div');
  frontText.innerHTML = 'Text 1';
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
  backText.innerHTML = 'Text 2';
  backText.classList.add(classes.title);
  divBack.append(backText);

  divFront.style.background = `url(${img}) no-repeat`;
  divBack.style.background = `url(${img}) no-repeat`;

  div.onmouseleave = () => {
    div.style.transform = 'rotateY(0)'
  };

  div.append(divFront, divBack);
  return div;
};

export default rotatingCard;