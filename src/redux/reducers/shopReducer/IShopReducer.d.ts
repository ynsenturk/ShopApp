import { Product } from "../../../models";

interface ShopState {
  cart: CartState[];
}

interface CartState {
  product: Product;
  quantity: number;
}

export type { ShopState };
