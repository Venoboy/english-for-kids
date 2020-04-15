import 'bootstrap';
require( 'mdbootstrap/js/mdb');

import 'bootstrap/scss/bootstrap.scss';

import Table from "./components/table/table";
import sidebar from "./components/sidebar/sidebar";
import './components/table/card/rotatingCard'
import '../index.html';



const table = new Table();
table.renderTable();

sidebar();
const input = document.createElement('input');
document.body.prepend(input);