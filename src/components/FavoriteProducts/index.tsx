import React from "react";
import { View } from "react-native";
import ProductItem from "../ProductItem";
import styles from "./styles";
import { useAppSelector } from "../../redux/hooks";
import { IStore } from "../../redux/store/store";
import { Product } from "../../models";

const index = () => {
  const favs = useAppSelector((state: IStore) => state.productUser.favs);
  return (
    //Main View
    <View>
      <View style={styles.listContainer}>
        {favs.map((item: Product) => (
          <ProductItem isFav={true} key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default index;
