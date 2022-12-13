import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#84f5ea",
    justifyContent: "center",
    alignItems: "center",
  },
});
function SecondLatLong() {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  );
}
export default SecondLatLong;
