import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../theme";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  viewContainer: {
    height: height * 0.13,
    width: width * 0.92,
    marginHorizontal: width * 0.04,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.white,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.4,
  },
  viewProductDetail: { flexDirection: "row", alignItems: "center" },
  textProductName: { fontSize: 16, fontWeight: "400", maxWidth: width * 0.46 },
  textProductPrice: {
    color: Colors.main,
    fontWeight: "500",
    fontSize: 13,
  },
  viewQuantityContainer: {
    shadowOpacity: 0.4,
    shadowColor: Colors.grey,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: width * 0.31,
    height: height * 0.047,
    borderRadius: 10,
  },
  buttonQuantity: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.lightGrey,
    height: height * 0.047,
    justifyContent: "center",
  },
  buttonDec: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderTopWidth: 0.15,
    borderLeftWidth: 0.15,
    borderBottomWidth: 0.15,
    borderColor: Colors.grey,
  },
  buttonInc: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderTopWidth: 0.15,
    borderRightWidth: 0.15,
    borderBottomWidth: 0.15,
    borderColor: Colors.grey,
  },

  viewQuantity: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.main,
    height: height * 0.047,
    justifyContent: "center",
  },
  textQuantity: {
    color: Colors.white,
    fontWeight: "400",
    fontSize: 18,
  },
});

export default styles;
