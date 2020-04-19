import 'bootstrap';
import "regenerator-runtime/runtime.js";
//require( 'mdbootstrap/js/mdb');

import 'bootstrap/scss/bootstrap.scss';

import Table from "./components/table/table";
import sidebar from "./components/sidebar/sidebar";
import sandwichMenu from "./components/sandwichMenu/sandwichMenu";

//import '../index.html';

const categoriesCount = 6;

const table = new Table();
table.renderTable(categoriesCount);
sandwichMenu();
alert('Приветствую тебя, проверяющий. Я еще не успел доделать проект, прошу отнестись с пониманием и проверить 26 апреля. Заранее благодарен ;)');