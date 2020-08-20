import {
  ADD_ITEM_IN_CART,
  SHOW_CART_DLG,
  DELETE_CART_ITEM,
  TOGGLE_MENU,
  UPDATE_CART_ITEM_QUANTITY,
  SET_CHECKEDOUT_ITEMS,
  SET_LOGGED_IN_USER,
  LOGOUT,
} from './Constants';

const initialState = {
  cartItems: [],
  showCartDialog: false,
  showMenu: true,
  checkedOutItems: [],
  loggedInUser: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_IN_CART: {
      let index = state.cartItems.findIndex((x) => x.id === action.payload.id);

      // Is the item user wants to add already in the cart?
      if (index !== -1) {
        // Yes, update the quantity.
        let cloneCartItems = [...state.cartItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: state.cartItems[index].quantity + action.payload.quantity,
        };

        return { ...state, cartItems: cloneCartItems };
      }

      // No, add a new item.
      return { ...state, cartItems: state.cartItems.concat(action.payload) };
    }
    case SHOW_CART_DLG:
      return { ...state, showCartDialog: action.payload };
    case DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case TOGGLE_MENU:
      return { ...state, showMenu: !state.showMenu };
    case SET_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.payload };
    case LOGOUT:
      return { ...state, loggedInUser: null, checkedOutItems: [] };
    case SET_CHECKEDOUT_ITEMS:
      return { ...state, checkedOutItems: action.payload };
    case UPDATE_CART_ITEM_QUANTITY: {
      let index = state.cartItems.findIndex((x) => x.id === action.payload.id);

      // User wants to update quantity of existing item.
      if (index !== -1) {
        let cloneCartItems = [...state.cartItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: action.payload.quantity,
        };

        return { ...state, cartItems: cloneCartItems };
      }

      // If we couldn't find such item, do nothing.
      return state;
    }
    default:
      return state;
  }
};

export default rootReducer;
