import 'bootstrap';
import 'regenerator-runtime';
import 'bootstrap/scss/bootstrap.scss';

import sidebarHighlighting from './components/sidebar/sidebarHighlighting';
import sandwichMenu from './components/sandwichMenu/sandwichMenu';
import menuSelector from './components/sidebar/menuSelector';
import renderTable from './components/table/renderTable';

sandwichMenu();
sidebarHighlighting();
menuSelector();
renderTable();
