import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type detailBoxProps = {
  name: string;
  description: string;
};

const index = ({ name, description }: detailBoxProps) => {
  return (
    <View style={styles.viewDetailContainer}>
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textDescription}>{description}</Text>
    </View>
  );
};

export default index;
