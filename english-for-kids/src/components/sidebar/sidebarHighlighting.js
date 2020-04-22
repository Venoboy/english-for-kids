const sidebarHighlighting = (activeElement) => {
  const listGroup = document.querySelector('.list-group');

  const setActive = (element) => {
    const listGroupArr = [...listGroup.children];
    listGroupArr.forEach((elem) => {
      elem.classList.remove('active');
    });
    if (typeof element === 'string') {
      listGroupArr.filter((elem) => elem.innerHTML === activeElement)[0].classList.add('active');
    } else {
      element.target.classList.add('active');
    }
  };
  listGroup.onclick = (ev) => setActive(ev);
  if (activeElement) {
    setActive(activeElement);
  }
};

export default sidebarHighlighting;
