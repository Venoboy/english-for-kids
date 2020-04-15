import "regenerator-runtime/runtime.js";
import classes from "./card.module.scss";
//import imageRef from './cry.jpg'

class Card {
  constructor(props) {
    this.word = props.word;
    this.translation = props.translation;
    this.image = props.image;
    this.audioSrc = props.audioSrc;
  }
  createCard = async () => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = classes.card;
    const imageRef = await import(`../../../assets/${this.image}`);
    //console.log(imageRef);

    const image = new Image();
    image.src = imageRef.default;
    cardWrapper.append(image);

    cardWrapper.innerHTML += `<span>${this.word}</span>`;
    document.body.append(cardWrapper);
  }
}

export default Card;