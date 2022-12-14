import { StyleSheet } from "react-native";
import { Colors } from "../utils/colors";
const Styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    borderColor: Colors.gray,
    borderWidth: 2,
    borderRadius: 5,
    width: "60%",
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: "#000",
    width: "30%",
  },
  containerStyle: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  container: {
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  ButtonText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default Styles;
