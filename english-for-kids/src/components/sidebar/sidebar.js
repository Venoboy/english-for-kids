const sidebar = () => {
  const toggleMenu = document.getElementById('menu-toggle');


toggleMenu.onclick = (ev => {
  ev.preventDefault();
  const wrapper = document.getElementById('wrapper');
  if (wrapper.classList.value.includes('toggled')) {
    wrapper.classList.remove('toggled')
  } else {
    wrapper.classList.add('toggled')
  }
});
};

export default sidebar;
