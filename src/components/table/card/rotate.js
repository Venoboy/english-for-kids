const rotate = () => {
  let flipVar;
  function flip() {
    flipVar = setTimeout(function () {
      const flip = document.querySelector('.flip');
      flip.style.cssText = "transform: rotateY(180deg)";
      const radiusFront = document.querySelector('.radius-front');
      radiusFront.style.display = "none";
    }, 400);
  }
  function back() {
    clearTimeout(flipVar);
    const radiusFront = document.querySelector('.radius-front');
    radiusFront.style.display = "block";

    const flip = document.querySelector('.flip');
    flip.style.transform = "none";
  }

  const thecard = document.querySelector('.thecard');
  thecard.onmouseenter = () => {
    flip();
  };
  thecard.onmouseleave = () => {
    back();
  };
};
export default rotate;