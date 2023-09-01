import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../theme";
import styles from "./styles";

const index = ({
  onPress,
  id,
  text,
  filterData,
}: {
  onPress: () => void;
  id: number;
  text: string;
  filterData: number;
}) => {
  return (
    <TouchableOpacity onPress={() => onPress} style={styles.sortOption}>
      <View>
        <View
          style={[
            styles.rbContainer,
            filterData === id && {
              backgroundColor: Colors.white,
            },
          ]}
        >
          {filterData === id && <View style={styles.rbChild} />}
        </View>
      </View>
      <View style={styles.optionTextView}>
        <Text style={styles.optionText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;
