import { StyleSheet } from "react-native";
import Colors from "../theme";

const styles = StyleSheet.create({
  titleView: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    shadowColor: Colors.grey,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "300",
  },
  viewFilterCol: {
    flexDirection: "column",
    paddingBottom: 20,
    borderBottomWidth: 1.5,
    borderBlockColor: Colors.grey,
  },
  textFilterSubTitle: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.grey2,
    marginVertical: 15,
  },
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
  searchInputView: {
    flexDirection: "row",
    backgroundColor: Colors.platinum,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    paddingLeft: 10,
    marginBottom: 10,
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
  filterButton: {
    backgroundColor: Colors.main,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    height: 38,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.white,
  },
});

export default styles;
