const sandwichMenu = () => {

let menuBtn = document.getElementById('sandwichmenu');
menuBtn.onclick = (ev) => {
  ev.preventDefault();
  menuBtn = document.getElementById('sandwichmenu');
  if ([...menuBtn.classList].includes('active')) {
    menuBtn.classList.remove('active')
  } else {
    menuBtn.classList.add('active')
  }
  // const jsMenu = document.querySelector('.js_menu');
  // if ([...jsMenu.classList].includes('active')) {
  //   jsMenu.classList.remove('active')
  // } else {
  //   jsMenu.classList.add('active')
  // }
};


  menuBtn.onclick = (ev) => {
    ev.preventDefault();
    const wrapper = document.getElementById('wrapper');
    menuBtn = document.getElementById('sandwichmenu');
    if ([...menuBtn.classList].includes('active')) {
      menuBtn.classList.remove('active');
      wrapper.classList.add('toggled')
    } else {
      menuBtn.classList.add('active');
      wrapper.classList.remove('toggled')
    }
    // const jsMenu = document.querySelector('.js_menu');
    // if ([...jsMenu.classList].includes('active')) {
    //   jsMenu.classList.remove('active')
    // } else {
    //   jsMenu.classList.add('active')
    // }
  };

// toggleMenu.onclick = (ev => {
//   ev.preventDefault();
//   const wrapper = document.getElementById('wrapper');
//   //console.log(wrapper.classList);
//   if (wrapper.classList.value.includes('toggled')) {
//     wrapper.classList.remove('toggled')
//   } else {
//     wrapper.classList.add('toggled')
//   }
// });
};

export default sandwichMenu;