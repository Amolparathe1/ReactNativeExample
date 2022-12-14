import { StyleSheet } from "react-native";
import { Colors } from "../utils/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: { flexDirection: "row" },
  titleText: {
    fontSize: 24,
    color: Colors.gray,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default styles;
