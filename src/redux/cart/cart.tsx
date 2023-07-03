import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../../utils/interfaces";

export interface CartState {
  cartItems: Game[];
  total: number;
}

const initialState: CartState = {
  cartItems: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Game>) => {
      const item = state.cartItems.find((obj) => obj.id === action.payload.id);
      if (!item) {
        const updatedCartItems = [...state.cartItems, action.payload];
        const updatedTotal = updatedCartItems.reduce(
          (acc, item) => acc + Number(item.price),
          0
        );
        return {
          ...state,
          cartItems: updatedCartItems,
          total: updatedTotal,
        };
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const removedItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      const updatedTotal = removedItems.reduce(
        (acc, item) => acc + Number(item.price),
        0
      );
      state.cartItems = removedItems;
      state.total = updatedTotal;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
