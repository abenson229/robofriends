import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from "./Hello";
import "tachyons";
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello greeting={"Hello React Ninja"}/>, document.getElementById('root'));
registerServiceWorker();
