import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
import LatLongInput from "../../components/LatlongInput";
import styles from "./styles";
function FirstLatLong() {
  // useState for set latitude and longitude
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    long: null,
  });
  return (
    <View style={styles.container}>
      <LatLongInput coordinates={coordinates} setCoordinates={setCoordinates} />
    </View>
  );
}
export default FirstLatLong;
