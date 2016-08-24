import React from 'react';
import ReactDOM from 'react-dom';

import ActionCreator from './ActionCreator';
import App from './App';

import styles from './style.css'

window.addEventListener('load', () => {
  ActionCreator.loadListItem().then(() => {
    let appNode = document.createElement('div');
    document.body.appendChild(appNode);

    ReactDOM.render(
      <App />, appNode
    );
  });
}, false);
