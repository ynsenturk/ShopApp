import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Vector } from "../../../assets/icons";
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
            styles.rectContainer,
            id === filterData && {
              backgroundColor: Colors.main,
            },
          ]}
        >
          {id === filterData && (
            <Vector
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={Colors.grey}
            />
          )}
        </View>
      </View>
      <View style={styles.optionTextView}>
        <Text style={styles.optionText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default index;
