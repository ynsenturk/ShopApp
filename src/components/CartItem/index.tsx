import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Product } from "../../models";
import Colors from "../../theme";
import styles from "./styles";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { IStore } from "../../redux/store/store";
import {
  increment,
  removeFromCart,
  decrement,
} from "../../redux/reducers/shopReducer";

type cartItemProps = {
  product: Product;
  quantity: number;
};

const { width, height } = Dimensions.get("window");
const index = ({ product, quantity }: cartItemProps) => {
  console.log("prduct:", product, quantity);
  const cart = useAppSelector((state: IStore) => state.shopUser.cart);
  const dispatch = useAppDispatch();

  return (
    <View style={{ width: "100%", backgroundColor: Colors.white }}>
      <View style={styles.viewContainer}>
        <View style={styles.viewProductDetail}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.textProductName}>{product.name}</Text>
            <Text style={styles.textProductPrice}>
              {product.price}
              <Text>{"\u20BA"}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.viewQuantityContainer}>
          <TouchableOpacity
            onPress={() => {
              if (quantity > 1) {
                dispatch(decrement(product.id));
              } else {
                dispatch(removeFromCart(product.id));
              }
            }}
            style={[styles.buttonQuantity, styles.buttonDec]}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <View style={styles.viewQuantity}>
            <Text style={styles.textQuantity}>{quantity}</Text>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(increment(product.id))}
            style={[styles.buttonQuantity, styles.buttonInc]}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
