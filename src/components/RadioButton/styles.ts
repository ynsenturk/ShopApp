import { StyleSheet } from "react-native";
import Colors from "../../theme";

const styles = StyleSheet.create({
  sortOption: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  rbContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: Colors.white,
    borderColor: Colors.main,
  },
  rbChild: {
    width: 7.5,
    height: 7.5,
    backgroundColor: Colors.main,
    borderRadius: 5,
  },
  optionTextView: {
    marginLeft: 5,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.grey2,
  },
});

export default styles;
