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

export const addItemInCart = (item) => ({
  type: ADD_ITEM_IN_CART,
  payload: item,
});

export const showCartDlg = (status) => ({
  type: SHOW_CART_DLG,
  payload: status,
});

export const deleteCartItem = (id) => ({
  type: DELETE_CART_ITEM,
  payload: id,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
  payload: null,
});

export const updateCartItemQnt = (obj) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: obj,
});

export const setCheckedOutItems = (items) => ({
  type: SET_CHECKEDOUT_ITEMS,
  payload: items,
});

export const setLoggedInUser = (user) => ({
  type: SET_LOGGED_IN_USER,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
