import Dispatcher from './Dispatcher';
import { fetchItemModel } from './util';

class ActionCreator {}

ActionCreator.loadListItem = () => {
  return fetchItemModel().then(({ data }) => {
    Dispatcher.dispatch({
      type:  'LOAD_LIST_ITEM',
      items: data
    });
  });
};

ActionCreator.addToCart = (item) => {
  Dispatcher.dispatch({
    type: 'ADD_CART_ITEM',
    item
  });
};

ActionCreator.removeFromCart = (idx) => {
  Dispatcher.dispatch({
    type: 'REMOVE_CART_ITEM',
    idx
  });
};

export default ActionCreator;
