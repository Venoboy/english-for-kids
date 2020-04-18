import 'bootstrap';
//require( 'mdbootstrap/js/mdb');

import 'bootstrap/scss/bootstrap.scss';

import Table from "./components/table/table";
import sidebar from "./components/sidebar/sidebar";
import './components/table/card/rotate'
import '../index.html';

const categoriesCount = 6;

const table = new Table();
table.renderTable(categoriesCount);
sidebar();