import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../theme";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  buttonProductContainer: {
    width: width * 0.44,
    marginTop: 10,
    height: height * 0.34,
    marginLeft: height * 0.018,
    borderWidth: 0.7,
    borderColor: Colors.grey,
    borderRadius: 4,
    padding: 10,
  },
  imageProduct: {
    width: width * 0.38,
    height: width * 0.38,
  },
  viewPrice: {
    marginTop: 10,
    alignItems: "flex-start",
  },
  textPrice: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.main,
  },
  textName: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
  },
  buttonAddToCart: {
    width: width * 0.38,
    height: 36,
    backgroundColor: Colors.main,
    position: "absolute",
    bottom: 10,
    left: 10,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  textAddToCart: {
    color: Colors.white,
  },
  buttonFav: {
    height: 36,
    position: "absolute",
    top: 15,
    right: 15,
  },
});

export default styles;
