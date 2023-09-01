import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../theme";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  scrollViewContent: { flex: 1, marginBottom: height * 0.085 },
  viewSub: {
    height: height * 0.08,
    flexDirection: "row",
    backgroundColor: Colors.white,
    alignItems: "center",
    paddingHorizontal: "4%",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  buttonComplete: {
    flex: 1,
    height: 38,
    backgroundColor: Colors.main,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    borderRadius: 4,
  },
  textButtonContinue: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 15,
  },
  textTotalPriceTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.main,
  },
  viewTotalPrice: {
    flex: 1,
    justifyContent: "center",
    marginTop: -10,
  },
  textTotalPrice: {
    fontWeight: "700",
    fontSize: 18,
    marginTop: 2,
  },
});

export default styles;
