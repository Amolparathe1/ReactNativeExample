import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import Input from "../../components/TextInput";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CheckBox from "@react-native-community/checkbox";
import { setUser } from "../../../reduxStore/user/userAction";
import { useDispatch } from "react-redux";
const AddUpdateUser = (props: any) => {
  //dispatch
  const dispatch = useDispatch();
  const {
    modalVisible,
    updateUser,
    isUpdateUser,
    setIsUpdateUser,
    setModalVisible,
    setUserList,
    userList,
  } = props;
  const [id, SetID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [Married, setMarried] = useState(false);

  const handleCheck = () => {
    setMarried(!Married);
  };
  useEffect(() => {
    if (isUpdateUser) {
      SetID(updateUser.id);
      setFirstName(updateUser.firstName);
      setLastName(updateUser.lastName);
      setProfileUrl(updateUser.profileUrl);
      setBirthDate(updateUser.birthDate);
      setMarried(updateUser.Married);
    } else {
      SetID(null);
      setFirstName("");
      setLastName("");
      setProfileUrl("");
      setBirthDate("");
      setMarried(false);
    }
  }, [isUpdateUser]);
  const updateUserOnclick = () => {
    const idToUpdate = updateUser.id;
    const index = userList.findIndex((obj: any) => obj.id === idToUpdate);
    if (index !== -1) {
      userList[index].firstName = firstName;
      userList[index].lastName = lastName;
      userList[index].profileUrl = profileUrl;
      userList[index].birthDate = birthDate;
      userList[index].Married = Married;
    }
    setUserList(userList);
    dispatch(setUser(userList));
    setModalVisible(false);
    setIsUpdateUser(false);
  };
  const addHandler = () => {
    if (
      id !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      profileUrl !== "" &&
      birthDate !== ""
    ) {
      console.log(id);
      var data = {
        id,
        firstName,
        lastName,
        profileUrl,
        birthDate,
        Married,
      };
      const newData = [...userList, data];
      setUserList(newData);
      dispatch(setUser(newData));
      setModalVisible(false);
    } else {
      alert("All fields required");
    }
  };

  return (
    <Modal visible={modalVisible} transparent={true} animationType="slide">
      <View style={styles.inputContainer}>
        {!isUpdateUser && (
          <Input
            label="Id"
            placeholder="Enter Id here"
            value={id}
            onChangeText={SetID}
            secureTextEntry={false}
            placeholderTextColor={"#000000"}
            keyboardType={"numeric"}
            name={"id"}
          />
        )}
        <Input
          label="First Name"
          placeholder="Enter first name here"
          value={firstName}
          onChangeText={setFirstName}
          secureTextEntry={false}
          placeholderTextColor={"#000000"}
          keyboardType={"default"}
          name={"firstName"}
        />
        <Input
          label="Last Name"
          placeholder="Enter last name here"
          value={lastName}
          onChangeText={setLastName}
          secureTextEntry={false}
          placeholderTextColor={"#000000"}
          keyboardType={"default"}
          name={"lastName"}
        />
        <Input
          label="Profile url"
          placeholder="Enter profile url here"
          value={profileUrl}
          onChangeText={setProfileUrl}
          secureTextEntry={false}
          placeholderTextColor={"#000000"}
          keyboardType={"default"}
          name={"profileUrl"}
        />
        <Input
          label="Birth date"
          placeholder="Enter Date of Birth here"
          value={birthDate}
          onChangeText={setBirthDate}
          secureTextEntry={false}
          placeholderTextColor={"#000000"}
          keyboardType={"default"}
          name={"birthDate"}
        />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <CheckBox
            value={Married}
            onValueChange={handleCheck}
            tintColors={{ true: "#007AFF", false: "#007AFF" }} // set the tint colors for the check icon
          />
          <Text style={styles.label}>Married </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            color="red"
            onPress={() => {
              setModalVisible(false), setIsUpdateUser(false);
            }}
          />
          <Button
            title={isUpdateUser ? "update" : "Add"}
            onPress={isUpdateUser ? updateUserOnclick : addHandler}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    height: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginTop: "auto",
  },
  inputText: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
    padding: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
    textAlign: "center",
  },
});

export default AddUpdateUser;
