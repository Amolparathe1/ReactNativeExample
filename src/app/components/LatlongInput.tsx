import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";
import Input from "./TextInput";
import TextStyle from "./styles";
interface Props {
  // any props that come into the component
  setCoordinates: React.Dispatch<React.SetStateAction<any>>;
  coordinates: { lat: any; long: any };
}
function LatLongInput({ coordinates, setCoordinates }: Props) {
  // useState for set latitude and longitude
  return (
    <View style={TextStyle.container}>
      {/* get latitude for user */}
      <Input
        label="Latitude"
        placeholder="Enter latitude"
        value={coordinates.lat}
        onChangeText={setCoordinates}
        secureTextEntry={false}
        placeholderTextColor={Colors.grayV2}
        keyboardType={"numeric"}
        name={"lat"}
      />
      {/* get longitude for user */}
      <Input
        label="Longitude"
        placeholder="Enter longitude"
        value={coordinates.long}
        onChangeText={setCoordinates}
        secureTextEntry={false}
        placeholderTextColor={Colors.grayV2}
        keyboardType={"numeric"}
        name={"long"}
      />
    </View>
  );
}
export default LatLongInput;
