import * as React from "react";
import { View, Text } from "react-native";
import styles from "../../global/styles";
interface Props {
  // any props that come into the component
  unitKm: string;
  valueKm: number;
  kmButton: boolean;
}
const DisplayKm = ({ unitKm, valueKm, kmButton }: Props) => {
  // conversion factor
  const factor = 0.621371;

  console.log("unit", unitKm);
  console.log("value", valueKm);
  //render page
  return (
    <View>
      <Text style={styles.titleTextDistance}>
        Distance between two coordinates :
      </Text>
      <Text style={styles.titleTextDist}>
        {kmButton ? valueKm : valueKm * factor}
        {unitKm}
      </Text>
    </View>
  );
};
export default DisplayKm;
