import { NavigationContainer } from "@react-navigation/native";
import { Dimensions, LogBox } from "react-native";
import React, { useEffect } from "react";
import { Provider as StoreProvider } from "react-redux";
import { AppStack } from "./route";
import { configureStore } from "./src/reduxStore/configureStore";
import { Text, TextInput } from "react-native";

const entireScreenWidth = Dimensions.get("window").width;
LogBox.ignoreAllLogs();
const App = () => {
  const { store, persistor } = configureStore();

  //font size not change
  interface TextWithDefaultProps extends Text {
    defaultProps?: { allowFontScaling?: boolean };
  }
  (Text as unknown as TextWithDefaultProps).defaultProps = {
    ...((Text as unknown as TextWithDefaultProps).defaultProps || {}),
    allowFontScaling: false,
  };

  //input font size not change
  interface TextWithDefaultProps extends Text {
    defaultProps?: { allowFontScaling?: boolean };
  }
  (TextInput as unknown as TextWithDefaultProps).defaultProps = {
    ...((TextInput as unknown as TextWithDefaultProps).defaultProps || {}),
    allowFontScaling: false,
  };
  return (
    //redux store
    <StoreProvider store={store}>
      <NavigationContainer>
        {/* app navigation */}
        <AppStack />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
