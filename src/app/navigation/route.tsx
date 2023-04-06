import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import all screen
import FirstLatLong from "../FirstPage/index";
import SecondLatLong from "../secondPage/index";

//import display user detail project
import DisplayList from "../userInfoProject/index";

//stack navigation
const App = createStackNavigator();

export const AppStack = () => {
  return (
    // initial Route
    <App.Navigator
      initialRouteName="DisplayList"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* first page */}
      <App.Screen
        name="DisplayList"
        component={DisplayList}
        options={{ headerShown: false }}
      />
    </App.Navigator>
  );
};

// export const AppStack = () => {
//   return (
//     // initial Route
//     <App.Navigator
//       initialRouteName="FirstLatLong"
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       {/* first page */}
//       <App.Screen
//         name="FirstLatLong"
//         component={FirstLatLong}
//         options={{ headerShown: false }}
//       />
//       {/* Second page */}
//       <App.Screen
//         name="SecondLatLong"
//         component={SecondLatLong}
//         options={{ headerShown: false }}
//       />
//     </App.Navigator>
//   );
// };
