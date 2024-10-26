import { createContext, useContext, useReducer } from "react";
import { products } from "../../pages/shopping-cart/ShoppingCartData";

export interface ProductItem {
  id?: number;
  code?: string;
  name?: string;
  description?: string;
  image?: string;
  variation?: string;
  size?: string;
  color?: string;
  finish?: string;
  price?: number;
  quantity?: number;
}

export interface ShoppingCartState {
  products: any;
}

const INITIAL_STATE: ShoppingCartState = {
  products: products,
};

export const ADD_ITEM = "[CART_CONTEXT] ADD_ITEM";
export const REMOVE_ITEM = "[CART_CONTEXT] REMOVE_ITEM";
export const CLEAR_ALL_ITEMS = "[CART_CONTEXT] CLEAR_ALL_ITEMS";

const reducer = (
  state: ShoppingCartState,
  action: { type: string; payload: any }
): ShoppingCartState => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return { ...state, products: state.products.push(payload) };
    case REMOVE_ITEM:
      return { ...state, products: state.products.filter((x: any) => x.id !== payload.id) };
    default:
      return state;
  }
};

const cartContext = createContext<{
  cartState: ShoppingCartState;
  cartDispatch: React.Dispatch<any>;
}>({ cartState: INITIAL_STATE, cartDispatch: () => null });

export const CartProvider = ({ children }: any) => {
  const [cartState, cartDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
