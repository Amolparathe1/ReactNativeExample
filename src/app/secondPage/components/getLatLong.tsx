import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ToastAndroid,
  Platform,
} from "react-native";
import { Colors } from "../../utils/colors";
import LatLongInput from "../../components/LatlongInput";
import styles from "../../global/styles";
import CustomButton from "../../components/button";
import { SetLatLongSecondPage } from "../../../reduxStore/latLog/latlongAction";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../reduxStore/useAppSelector";
import { RootState } from "../../../reduxStore/configureStore";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";

const FirstLatLong = () => {
  // useState for set latitude and longitude
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    long: null,
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  //dispatch
  const dispatch = useDispatch();

  //navigation
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // reduxStore
  const store = useTypedSelector((state: RootState) => state);

  //click on Next
  const OnClickPrevious = () => {
    navigation.goBack();
  };

  //click on save
  const OnClickCalculate = () => {
    showToastWithGravity("Success");
  };

  // android Tost
  const showToastWithGravity = (msg: string) => {
    if (Platform.OS === "android") {
      ToastAndroid.showWithGravity(
        msg,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      Alert.alert(msg);
    }
  };

  //set value from reduxStore
  React.useEffect(() => {
    setCoordinates({
      lat: store.LatLongReducer.LatLongSecondPage.lat,
      long: store.LatLongReducer.LatLongSecondPage.long,
    });
  }, []);

  // useEffect for button actions
  React.useEffect(() => {
    console.log(store);
    coordinates.lat !== null &&
    coordinates.long !== null &&
    coordinates.lat !== "" &&
    coordinates.long !== ""
      ? setButtonDisabled(false)
      : setButtonDisabled(true);
  }, [store, coordinates]);
  React.useEffect(() => {
    if (
      coordinates.lat !== null &&
      coordinates.long !== null &&
      coordinates.lat !== "" &&
      coordinates.long !== ""
    ) {
      dispatch(
        SetLatLongSecondPage({ lat: coordinates.lat, long: coordinates.long })
      );
    }
  }, [coordinates]);

  //render page
  return (
    <View style={styles.container}>
      <LatLongInput coordinates={coordinates} setCoordinates={setCoordinates} />
      <View style={{ flexDirection: "row" }}>
        <CustomButton
          onPress={OnClickPrevious}
          title={"previous"}
          color={Colors.green}
          opacity={1}
          disabled={false}
        />
        <CustomButton
          onPress={OnClickCalculate}
          title={"Calculate"}
          color={Colors.green}
          opacity={buttonDisabled ? 0.4 : 1}
          disabled={buttonDisabled}
        />
      </View>
    </View>
  );
};
export default FirstLatLong;
