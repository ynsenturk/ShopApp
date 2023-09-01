import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../theme";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  filterView: {
    flexDirection: "column",
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.grey,
    backgroundColor: Colors.white,
  },
  searchInputView: {
    flexDirection: "row",
    backgroundColor: Colors.platinum,
    marginHorizontal: 15,
    height: 40,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
    paddingLeft: 10,
  },
  filterActionView: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
  },
  textFilters: {
    fontSize: 18,
    fontWeight: "500",
  },
  buttonFilter: {
    backgroundColor: Colors.grey,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "400",
  },
});

export default styles;
