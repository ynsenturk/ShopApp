import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "./IProductReducer";
import { Product } from "../../../models";
import Toast from "react-native-toast-message";

const initialState: ProductState = {
  favs: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToFavs: (state, action: PayloadAction<Product>) => {
      state.favs = [...state.favs, action.payload];
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "This product added to favorites",
      });

      return state;
    },
    removeFromFavs: (state, action: PayloadAction<string>) => {
      const existItem = state.favs.find(
        (p: Product) => p.id === action.payload
      );
      if (existItem) {
        for (let i = 0; i < state.favs.length; i++) {
          const selectedModel = state.favs[i];

          if (selectedModel.id === action.payload) {
            state.favs.splice(i, 1);
            break;
          }
        }
      }
      return state;
    },
  },
});

export const { addToFavs, removeFromFavs } = productSlice.actions;

export default productSlice.reducer;
