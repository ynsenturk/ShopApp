import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { registerRootComponent } from "expo";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import { LogBox } from "react-native";
import Toast from "react-native-toast-message";

LogBox.ignoreAllLogs();

export default function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <Toast />
      </PersistGate>
    </Provider>
  );
}

registerRootComponent(App);
