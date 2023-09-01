import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShopState } from "./IShopReducer";
import Toast from "react-native-toast-message";
import { Product } from "../../../models";

const initialState: ShopState = {
  cart: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) => {
      state.cart = [...state.cart, action.payload];
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "This product added to cart",
      });

      return state;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existItem = state.cart.find((x) => x.product.id === action.payload);
      if (existItem) {
        for (let i = 0; i < state.cart.length; i++) {
          const selectedModel = state.cart[i];

          if (selectedModel.product.id === action.payload) {
            state.cart.splice(i, 1);
            break;
          }
        }
      }
      return state;
    },
    increment: (state, action: PayloadAction<string>) => {
      for (let i = 0; i < state.cart.length; i++) {
        const selectedIncModel = state.cart[i];

        if (selectedIncModel.product.id === action.payload) {
          selectedIncModel.quantity += 1;
          break;
        }
      }
      return state;
    },
    decrement: (state, action: PayloadAction<string>) => {
      for (let i = 0; i < state.cart.length; i++) {
        const selectedIncModel = state.cart[i];

        if (selectedIncModel.product.id === action.payload) {
          selectedIncModel.quantity -= 1;
          break;
        }
      }
      return state;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  shopSlice.actions;

export default shopSlice.reducer;
