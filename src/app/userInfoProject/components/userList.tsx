import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import { Colors } from "../../utils/colors";
import styles from "../../global/styles";
import CustomButton from "../../components/button";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../reduxStore/useAppSelector";
import { RootState } from "../../../reduxStore/configureStore";
import AddUpdateUser from "./addUpadateuser";
import { setUser } from "../../../reduxStore/user/userAction";
const DisplayList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userList, setUserList] = useState([]);
  const [updateUser, setUpdateUser] = useState([]);
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  //dispatch
  const dispatch = useDispatch();

  // reduxStore
  const store = useTypedSelector((state: RootState) => state);
  const OnClickAddUser = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    setUserList(store.userReducer.user);
  }, [store]);

  const onclickOnUpdate = (item: any) => {
    setUpdateUser(item);
    setIsUpdateUser(true);
    setModalVisible(true);
  };
  const DeleteUser = (id: any) => {
    const idToDelete = id;
    const index = userList.findIndex((obj: any) => obj.id === idToDelete);
    if (index !== -1) {
      userList.splice(index, 1);
    }
    dispatch(setUser(userList));
    setUserList(userList);
  };
  const showAlert = (id: any) => {
    Alert.alert(
      "Delete",
      " Are you sure you want to delete",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => DeleteUser(id),
        },
      ],
      { cancelable: false }
    );
  };
  const renderItem = (item: any) => (
    <View style={stylesCard.card}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: item.item.profileUrl }}
          style={stylesCard.image}
        />
        <View>
          <Text style={stylesCard.name}>ID:{item.item.id}</Text>
          <Text style={stylesCard.name}>
            Name:{item.item.firstName}
            {` `}
            {item.item.lastName}
          </Text>
          <Text style={stylesCard.name}>
            {item.item.Married ? "Married" : "unmarried"}
          </Text>
          <Text style={stylesCard.name}>BirthDate:{item.item.birthDate}</Text>
        </View>
      </View>
      <Button
        title="Delete"
        color="red"
        onPress={() => showAlert(item.item.id)}
      />
      <Button title="update" onPress={() => onclickOnUpdate(item.item)} />
    </View>
  );
  //render page
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        height: "100%",
      }}
    >
      <Text style={[styles.title, { fontSize: 24 }]}>User Details </Text>
      <View style={{ height: "70%", marginTop: "20%" }}>
        {userList.length > 0 && (
          <FlatList
            data={userList}
            renderItem={renderItem}
            keyExtractor={(item) => item}
          />
        )}
      </View>
      <View
        style={[
          styles.buttonContainer,
          { position: "absolute", right: 10, bottom: 20 },
        ]}
      >
        <AddUpdateUser
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setUserList={setUserList}
          userList={userList}
          updateUser={updateUser}
          isUpdateUser={isUpdateUser}
          setIsUpdateUser={setIsUpdateUser}
        />

        <CustomButton
          onPress={() => OnClickAddUser()}
          title={"Add New User"}
          color={Colors.green}
          opacity={1}
          disabled={false}
        />
      </View>
    </View>
  );
};
export default DisplayList;

const stylesCard = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "95%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
