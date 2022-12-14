import * as React from "react";
import { View, Text, Alert, ToastAndroid, Platform } from "react-native";
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
import { calcCrow } from "../../utils/distanceBetween";
import DisplayKm from "./DisplayKm";

const FirstLatLong = () => {
  // useState for set latitude and longitude
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    long: null,
  });

  //useState for set button
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  //useState for set km/miles
  const [kmButton, setKmButton] = React.useState(true);

  //useState for set km/miles
  const [km, setKm] = React.useState<number>(0);

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

  const getDistanceBetween = async () => {
    const distance = await calcCrow(
      store.LatLongReducer.LatLongFirstPage.lat,
      store.LatLongReducer.LatLongFirstPage.long,
      store.LatLongReducer.LatLongSecondPage.lat,
      store.LatLongReducer.LatLongSecondPage.long
    );
    setKm(Math.round(distance));
    console.log(distance);
  };
  //click on save
  const OnClickCalculate = () => {
    getDistanceBetween();
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

  // dispatch latitude and longitude
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
      setKm(0);
    }
  }, [coordinates]);

  // change km/miles
  function changeButton() {
    setKmButton(!kmButton);
  }

  //render page
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distance calculator</Text>
      <Text style={styles.titleText}> Second coordinates</Text>
      <LatLongInput coordinates={coordinates} setCoordinates={setCoordinates} />
      <View style={styles.buttonContainer}>
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
      <View style={styles.buttonContainerUnit}>
        <CustomButton
          onPress={changeButton}
          title={"Km"}
          color={kmButton ? Colors.pinkv2 : Colors.grayV2}
          opacity={1}
          disabled={false}
        />
        <CustomButton
          onPress={changeButton}
          title={"Mile"}
          color={!kmButton ? Colors.pinkv2 : Colors.grayV2}
          opacity={buttonDisabled ? 0.4 : 1}
          disabled={buttonDisabled}
        />
      </View>
      {km !== 0 && (
        <DisplayKm
          unitKm={kmButton ? "km" : "miles"}
          valueKm={km}
          kmButton={kmButton}
        />
      )}
    </View>
  );
};
export default FirstLatLong;
