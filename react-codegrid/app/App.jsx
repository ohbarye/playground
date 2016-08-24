import React from 'react';
import { Container } from 'flux/utils';

import ActionCreator from './ActionCreator';

import ListItemStore from './store/ListItem';
import CartItemStore from './store/CartItem';

import Header from './components/Header.jsx';
import ContainerEl from './components/Container.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  render() {
    const { listItems, cartItems } = this.state;
    const { addToCart, removeFromCart } = ActionCreator;

    return (
      <div>
        <Header />
        <ContainerEl
          listItems={listItems}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <Footer />
      </div>
    );
  }
}

App.getStores = () => {
  return [ ListItemStore, CartItemStore ];
};

App.calculateState = (_prevState) => {
  return {
    listItems: ListItemStore.getItems(),
    cartItems: CartItemStore.getItems(),
  };
};

const app = Container.create(App);

export default app;
