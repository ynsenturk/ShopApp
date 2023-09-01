import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../theme";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  viewSub: {
    width: "100%",
    height: height * 0.065,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.03,
  },
  viewPrice: {
    flex: 1,
    flexDirection: "column",
    marginTop: -10,
  },
  priceTitle: {
    fontWeight: "400",
    fontSize: 18,
    color: Colors.main,
  },
  price: {
    fontWeight: "700",
    fontSize: 18,
  },
  viewButton: {
    flex: 1,
    marginTop: -10,
  },
  buttonAddToCart: {
    height: height * 0.045,
    backgroundColor: Colors.main,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonAddToCart: {
    color: Colors.white,
    fontWeight: "bold",
  },
});

export default styles;
