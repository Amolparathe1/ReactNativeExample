import { StyleSheet } from "react-native";
import { Colors } from "../utils/colors";
const TextStyle = StyleSheet.create({
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 20,
    color: "#000",
  },
  containerStyle: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TextStyle;
