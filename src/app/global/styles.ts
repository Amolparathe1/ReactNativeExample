import { StyleSheet } from "react-native";
import { Colors } from "../utils/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: { flexDirection: "row", position: "absolute", bottom: 50 },
  buttonContainerUnit: { flexDirection: "row" },
  title: {
    fontSize: 32,
    color: Colors.black,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    position: "absolute",
    top: 50,
  },
  titleText: {
    fontSize: 24,
    color: Colors.gray,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  titleTextDistance: {
    fontSize: 14,
    color: Colors.blackV2,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    marginVertical: 5,
  },
  titleTextDist: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    marginVertical: 5,
  },
});
export default styles;
