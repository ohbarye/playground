import React from 'react';

import Item from './Item.jsx';

const Cart = (props) => {
  const {
    items,
    removeFromCart,
  } = props;

  let Content;
  if (items.length) {
    Content = items.map((item, idx) => {
      return (
        <Item
          key={idx}
          {...item}
          onClickBtn={() => { removeFromCart(idx); }}
        />
      );
    });
  } else {
    Content = <span>カートに商品がありません</span>;
  }

  return (
    <div className="Cart">
      {Content}
    </div>
  );
};

Cart.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  removeFromCart: React.PropTypes.func.isRequired,
};

export default Cart;