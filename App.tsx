import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import React, { useEffect } from "react";
import { Provider as StoreProvider } from "react-redux";
import { AppStack } from "./src/app/navigation/route";
import { configureStore } from "./src/reduxStore/configureStore";
import { Text, TextInput } from "react-native";
import { PersistGate } from "redux-persist/integration/react";

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
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {/* app navigation */}
          <AppStack />
        </NavigationContainer>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
