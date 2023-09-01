import React, { createContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../theme";
import { Platform } from "react-native";

async function clearAsyncStorage() {
  await AsyncStorage.clear();
}

// const AuthContext = createContext<IAuthProps>({});

// const clearAsyncStorage = async () => {
//   const asyncStorageKeys = await AsyncStorage.getAllKeys();
//   if (asyncStorageKeys.length > 0) {
//     if (Platform.OS === "android") {
//       await AsyncStorage.clear();
//     }
//     if (Platform.OS === "ios") {
//       await AsyncStorage.multiRemove(asyncStorageKeys);
//     }
//   }
// };

const index = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Profile Screen</Text>
      {/* <TouchableOpacity
        style={{
          height: 48,
          backgroundColor: Colors.main,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          marginTop: 20,
        }}
        onPress={() => clearAsyncStorage()}
      >
        <Text style={{ color: Colors.white }}>Clear storage</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default index;
