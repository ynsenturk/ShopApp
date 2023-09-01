import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../theme";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  sortOption: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  optionTextView: {
    marginLeft: 5,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.grey2,
  },
  rectContainer: {
    width: 16,
    height: 16,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: Colors.white,
    borderColor: Colors.main,
  },
});

export default styles;
