import React from 'react';

import Item from './Item.jsx';

const ItemList = (props) => {
  const { items } = props;

  return (
    <ul className="ItemList">
      {items.map((item, idx) => {
        return (
          <li className="ItemList__item" key={idx}>
            <Item {...item} />
          </li>
        );
      })}
    </ul>
  );
};

ItemList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default ItemList;