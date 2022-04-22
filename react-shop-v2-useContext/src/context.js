import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: itemId } });
  };

  value.handleCartShow = () => {
    dispatch({ type: "HANDLE_CART_SHOW" });
  };

  value.handleCartBtnClick = (id, str) => {
    dispatch({ type: "HANDLE_CART_BTN_CLICK", payload: { id: id, str: str } });
  };

  value.addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data })
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
