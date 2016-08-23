import React from 'react';
import ReactDOM from 'react-dom';

import { fetchItemModel } from './util';

import styles from './style.css'

import App from './components/App';

window.addEventListener('load', () => {

  // サーバーに商品リストをリクエスト
  fetchItemModel()
    .then((res) => {
      let appNode = document.createElement('div');
      document.body.appendChild(appNode);

      // そのレスポンスを`props`に渡しつつ、アプリケーションを起動
      ReactDOM.render(
        <App listItems={res.data} />, appNode
      );
    });

}, false);