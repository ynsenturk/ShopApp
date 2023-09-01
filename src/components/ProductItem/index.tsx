import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Star, StarGold } from "../../../assets/icons";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { IStore } from "../../redux/store/store";
import { addToCart, increment } from "../../redux/reducers/shopReducer";
import { addToFavs, removeFromFavs } from "../../redux/reducers/productReducer";

type productItemType = {
  item: Product;
  isFav: boolean;
};
const index = ({ item, isFav }: productItemType) => {
  const navigation = useNavigation();
  const cart = useAppSelector((state: IStore) => state.shopUser.cart);
  const favs = useAppSelector((state: IStore) => state.productUser.favs);
  const dispatch = useAppDispatch();

  const setCartItem = (product: Product) => {
    const newProduct = {
      product,
      quantity: 1,
    };
    dispatch(addToCart(newProduct));
  };

  const setFavsItem = (product: Product) => {
    const existItem = favs.filter((p: Product) => p.id === product.id);
    if (existItem.length > 0) {
      dispatch(removeFromFavs(product.id));
    } else {
      dispatch(addToFavs(product));
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={styles.buttonProductContainer}
    >
      <Image
        style={styles.imageProduct}
        source={{
          uri: item.image,
        }}
        resizeMode="stretch"
      />
      <View style={styles.viewPrice}>
        <Text style={styles.textPrice}>
          {item.price}
          <Text testID="price-text">{" \u20BA"}</Text>
        </Text>
      </View>
      <Text style={styles.textName}>{item.name}</Text>
      <TouchableOpacity
        testID="addToCart-btn"
        onPress={() => {
          const isExist = cart.filter((i) => i.product.id === item.id);
          console.log("isExist:", isExist);
          if (isExist.length !== 0) dispatch(increment(item.id));
          else setCartItem(item);
        }}
        style={styles.buttonAddToCart}
      >
        <Text style={styles.textAddToCart}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setFavsItem(item)}
        style={styles.buttonFav}
      >
        {isFav ? (
          <StarGold width="24" height="24" viewBox="0 0 24 24" />
        ) : (
          <Star width="24" height="24" viewBox="0 0 24 24" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default index;
