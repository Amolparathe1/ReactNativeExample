import React from "react";
import { TextInput, View, Text, KeyboardTypeOptions } from "react-native";
import Styles from "./styles";
interface Props {
  // any props that come into the component
  label: string;
  value: any;
  onChangeText: React.Dispatch<React.SetStateAction<any>>;
  placeholder: string;
  secureTextEntry: boolean;
  placeholderTextColor: string;
  keyboardType: KeyboardTypeOptions | undefined;
  name: string;
}
//create a new component for the TextInput
const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  placeholderTextColor,
  keyboardType,
  name,
}: Props) => {
  // const onChangeHandler = (value: any, setState: any) => {
  //   setState((prev: any) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  const onChangeHandler = (value: any, setState: any) => {
    setState(value);
  };
  return (
    <View style={Styles.containerStyle}>
      {/* user label */}
      <Text style={Styles.labelStyle}>{label}</Text>
      {/* user input */}
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={Styles.inputStyle}
        value={value}
        key={name}
        onChangeText={(val) => onChangeHandler(val, onChangeText)}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
