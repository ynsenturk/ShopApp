import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import ProductItem from "../ProductItem";
import styles from "./styles";
import Colors from "../../theme";
import { Product } from "../../models";
import { useAppSelector } from "../../redux/hooks";
import { IStore } from "../../redux/store/store";

const index = ({ products }: { products: Product[] }) => {
  const favs = useAppSelector((state: IStore) => state.productUser.favs);

  if (!products) {
    return <ActivityIndicator color={Colors.main} />;
  }
  return (
    <>
      {products && (
        <View>
          <View style={styles.listContainer}>
            {products.length > 0 ? (
              // products.length == 2 ? (
              //   <FlatList
              //     data={products.splice(0, 12)}
              //     numColumns={1}
              //     renderItem={({ item }) => (
              //       <ProductItem isFav={false} key={item.id} item={item} />
              //     )}
              //     // onEndReached={handleLoadMore}
              //     // onEndReachedThreshold={0}
              //   />
              // ) : (
              //   <FlatList
              //     data={products.splice(0, 12)}
              //     numColumns={2}
              //     renderItem={({ item }) => (
              //       <ProductItem isFav={false} key={item.id} item={item} />
              //     )}
              //   />
              // )
              products
                .slice(0, 12)
                .map((item) => (
                  <ProductItem isFav={false} key={item.id} item={item} />
                ))
            ) : (
              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 24, color: Colors.main }}>
                  The products not found
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};

export default index;
