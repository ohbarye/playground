import React from 'react';

const Item = () => {
  return (
    <div className="Item">
      <h3 className="Item__title">あのイーハトーヴォ</h3>
      <span className="Item__author">xxxx</span>
      <p className="Item__desc">あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</p>
      <p className="Item__price">800円</p>
      <div className="Item__btnWrap">
        <button type="button" className="Btn">カートにいれる</button>
      </div>
    </div>
  );
};

export default Item;