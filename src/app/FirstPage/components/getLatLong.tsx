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
import styles from "./styles";
import CustomButton from "../../components/button";
import { SetLatLongFirstPage } from "../../../reduxStore/latLog/latlongAction";
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
  const OnClickNext = () => {
    navigation.navigate("SecondLatLong");
  };
  //click on save
  const OnClickSave = () => {
    dispatch(
      SetLatLongFirstPage({ lat: coordinates.lat, long: coordinates.long })
    );
    if (Platform.OS === "android") {
      showToastWithGravity();
    } else {
      Alert.alert("coordinates Save Success");
    }
  };
  // android Tost
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "coordinates Save Success",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };
  // useEffect for button actions
  React.useEffect(() => {
    coordinates.lat !== null &&
    coordinates.long !== null &&
    store.LatLongReducer.LatLongFirstPage.lat === coordinates.lat &&
    store.LatLongReducer.LatLongFirstPage.long === coordinates.long
      ? setButtonDisabled(false)
      : setButtonDisabled(true);
  }, [store, coordinates]);
  //set value from reduxStore
  React.useEffect(() => {
    setCoordinates({
      lat: store.LatLongReducer.LatLongFirstPage.lat,
      long: store.LatLongReducer.LatLongFirstPage.long,
    });
  }, []);

  //render page
  return (
    <View style={styles.container}>
      <LatLongInput coordinates={coordinates} setCoordinates={setCoordinates} />
      <View style={{ flexDirection: "row" }}>
        <CustomButton
          onPress={OnClickSave}
          title={"Save"}
          color={Colors.green}
          opacity={1}
          disabled={false}
        />
        <CustomButton
          onPress={OnClickNext}
          title={"Next"}
          color={Colors.green}
          opacity={buttonDisabled ? 0.4 : 1}
          disabled={buttonDisabled}
        />
      </View>
    </View>
  );
};
export default FirstLatLong;
