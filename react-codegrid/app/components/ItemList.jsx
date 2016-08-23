import React from 'react';

import Item from './Item.jsx';

const ItemList = () => {
  return (
    <ul className="ItemList">
      <li className="ItemList__item">
        <Item />
      </li>
      <li className="ItemList__item">
        <Item />
      </li>
      <li className="ItemList__item">
        <Item />
      </li>
      <li className="ItemList__item">
        <Item />
      </li>
      <li className="ItemList__item">
        <Item />
      </li>
    </ul>
  );
};

export default ItemList;