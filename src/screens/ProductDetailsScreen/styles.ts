import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    marginTop: 15,
  },
  detailScroll: {
    paddingHorizontal: width * 0.04,
  },
  imageProduct: {
    width: width * 0.92,
    height: width * 0.5,
  },
});

export default styles;
