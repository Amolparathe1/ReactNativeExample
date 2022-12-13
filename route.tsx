import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import all screen
import FirstLatLong from "./src/app/FirstPage/index";
import SecondLatLong from "./src/app/secondPage/index";

//stack navigation
const App = createStackNavigator();

export const AppStack = () => {
  return (
    // initial Route
    <App.Navigator
      initialRouteName="FirstLatLong"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* first page */}
      <App.Screen
        name="FirstLatLong"
        component={FirstLatLong}
        options={{ headerShown: false }}
      />
      {/* Second page */}
      <App.Screen
        name="SecondLatLong"
        component={SecondLatLong}
        options={{ headerShown: false }}
      />
    </App.Navigator>
  );
};
