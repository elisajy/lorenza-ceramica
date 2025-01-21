import { createContext, useContext, useEffect, useReducer, useState } from "react";

export interface ProductItem {
  id?: number;
  prdCode?: string;
  prdName?: string;
  prdDesc?: string;
  images?: string[];
  prdVariation?: string;
  prdSize?: string;
  prdColor?: string;
  finish?: string;
  prdFinish?: string;
}

export interface ShoppingCartState {
  products: any;
}

interface CartContextProps {
  cartState: ShoppingCartState;
  addItem: (payload: any) => void;
  removeItem: (payload: any) => void;
}

const INITIAL_STATE: ShoppingCartState = {
  products: [],
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
      if (state.products.filter((x: any) => x.id === payload.id).length === 0){
        const addedProducts = [...state.products, { ...payload }];
        return { ...state, products: addedProducts };
      }
      else return state;
    case REMOVE_ITEM:
      return { ...state, products: state.products.filter((x: any) => x.id !== payload.id) };
    default:
      return state;
  }
};

// const cartContext = createContext<{
//   cartState: ShoppingCartState;
//   cartDispatch: React.Dispatch<any>;
// }>({ cartState: INITIAL_STATE, cartDispatch: () => null });

// export const CartProvider = ({ children }: any) => {
//   const [cartState, cartDispatch] = useReducer(reducer, INITIAL_STATE);
//   return (
//     <cartContext.Provider value={{ cartState, cartDispatch }}>
//       {children}
//     </cartContext.Provider>
//   );
// };

export const cartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: any) => {
  const [cartState, setCartState] = useState<ShoppingCartState>(sessionStorage.getItem('cartState') ? JSON.parse(sessionStorage.getItem('cartState')!) : INITIAL_STATE);
  
  useEffect(() => {
    const storedState = sessionStorage.getItem('cartState');
    if (storedState) {
      setCartState(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cartState', JSON.stringify(cartState));
  }, [cartState]);

  const addItem = (payload: any) => {
    if (cartState.products.filter((x: any) => x.id === payload.id).length === 0){
      setCartState((prevState: any) => ({
        ...prevState,
        products: [...cartState.products, { ...payload }]
      }));
    }
  }

  const removeItem = (payload: any) => {
    setCartState((prevState: any) => ({
      ...prevState,
      products: cartState.products.filter((x: any) => x.id !== payload.id)
    }));
  };

  return (
    <cartContext.Provider
      value={{ cartState, addItem, removeItem }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
