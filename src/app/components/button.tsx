import React from "react";
import Styles from "./styles";
import { TouchableOpacity, Text } from "react-native";
interface Props {
  // any props that come into the component
  onPress: any;
  title: string;
  color: string;
  opacity: number;
  disabled: boolean;
}
const CustomButton = ({ onPress, title, color, disabled, opacity }: Props) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      Styles.ButtonContainer,
      { backgroundColor: color, opacity: opacity },
    ]}
  >
    <Text style={Styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
