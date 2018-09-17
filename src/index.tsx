import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import Todo from './todo';

ReactDOM.render(
  <Todo store = {store} />,
  document.getElementById('root') as HTMLElement
);
