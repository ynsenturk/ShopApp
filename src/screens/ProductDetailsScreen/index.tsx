import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, ActivityIndicator } from "react-native";
import { Product } from "../../models";
import styles from "./styles";
import Colors from "../../theme";
import DetailBox from "../../components/DetailBox";
import CardButton from "../../components/CardButton";

const index = (props) => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    setProduct(props?.route?.params?.product);
  }, []);
  if (!product) {
    return <ActivityIndicator color={Colors.main} />;
  }
  return (
    <View style={styles.detailContainer}>
      <ScrollView style={styles.detailScroll}>
        <Image
          source={{ uri: product.image }}
          style={styles.imageProduct}
          resizeMode="stretch"
        />
        <DetailBox name={product.name} description={product.description} />
      </ScrollView>
      <CardButton item={product} />
    </View>
  );
};

export default index;
