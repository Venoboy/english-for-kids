import renderTable from "../table/renderTable";

const menuSelector = () => {
  const list = document.querySelector('.list-group');
  document.body.onclick = (ev) => {
    const wrapper = document.getElementById('wrapper');
    const menuBtn = document.getElementById('sandwichmenu');

    //закрыть меню
    if (ev.target.id !== 'sidebar-wrapper'
      && !wrapper.classList.value.includes('toggled')
      && ev.target.nodeName !== 'path'
      && ev.target.nodeName !== 'svg') {
      menuBtn.classList.remove('active');
      wrapper.classList.add('toggled')
    }

    if (ev.target.classList.value.includes('list-group-item')) {
      renderTable(ev.target.innerHTML);
    }
  };

};

export default menuSelector