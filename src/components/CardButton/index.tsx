import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Product } from "../../models";
import styles from "./styles";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/reducers/shopReducer";

type cartButtonType = {
  item: Product;
};

const index = ({ item }: cartButtonType) => {
  const dispatch = useAppDispatch();

  const setCartItem = (product: Product) => {
    const newProduct = {
      product,
      quantity: 1,
    };
    dispatch(addToCart(newProduct));
  };
  return (
    <View style={styles.viewSub}>
      <View style={styles.viewPrice}>
        <Text style={styles.priceTitle}>Price:</Text>
        <Text style={styles.price}>
          {item.price}
          <Text>{" \u20BA"}</Text>
        </Text>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          onPress={() => setCartItem(item)}
          style={styles.buttonAddToCart}
        >
          <Text style={styles.textButtonAddToCart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
