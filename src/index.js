import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from "./Card";
// import CardList from "./CardList";
import App from "./App";
// import {robots} from "./robots";
import "tachyons";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (<App />, document.getElementById('root'));

registerServiceWorker();
