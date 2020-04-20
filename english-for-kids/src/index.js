import 'bootstrap';
import "regenerator-runtime/runtime.js";

import 'bootstrap/scss/bootstrap.scss';
import sidebar from "./components/sidebar/sidebar";
import sandwichMenu from "./components/sandwichMenu/sandwichMenu";
import menuSelector from "./components/sidebar/menuSelector";
import renderTable from "./components/table/renderTable";

sandwichMenu();
menuSelector();
renderTable();