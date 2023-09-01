import { ShopState } from "../reducers/shopReducer/IShopReducer";
import { ProductState } from "../reducers/productReducer/IProductReducer";

export interface IStore {
  shopUser: ShopState;
  productUser: ProductState;
}
