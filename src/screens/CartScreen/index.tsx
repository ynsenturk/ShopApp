import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CartItem from "../../components/CartItem";
import styles from "./styles";
import { useAppSelector } from "../../redux/hooks";
import { IStore } from "../../redux/store/store";
import { Product } from "../../models";

const index = ({
  cartItems,
}: {
  route: any;
  cartItems: { product: Product; quantity: number }[];
}) => {
  const cart = useAppSelector((state: IStore) => state.shopUser.cart);
  console.log("cartpage:", cart);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += parseFloat(cartItem.product.price) * cartItem.quantity;
      setTotalPrice(total);
    });
    cartItems.length ? null : setTotalPrice(0);
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollViewContent}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem product={item.product} quantity={item.quantity} />
          )}
        />
      </ScrollView>
      <View style={styles.viewSub}>
        <View style={styles.viewTotalPrice}>
          <Text style={styles.textTotalPriceTitle}>Total:</Text>
          <Text style={styles.textTotalPrice}>
            {totalPrice.toFixed(2)}
            <Text>{"\u20BA"}</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonComplete}>
          <Text style={styles.textButtonContinue}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
