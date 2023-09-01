import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Text, TouchableOpacity } from "react-native";
import Colors from "../theme";
import { ArrowBack } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const HomeNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTintColor: Colors.white,
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: Colors.main },
          headerLeft: () => (
            <Text
              style={{
                fontWeight: "bold",
                color: Colors.white,
                fontSize: 24,
                marginLeft: 15,
                paddingBottom: 10,
              }}
            >
              E-Market
            </Text>
          ),
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: Colors.white,
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: Colors.main },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 12 }}
            >
              <ArrowBack
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={Colors.white}
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "bold",
                color: Colors.white,
                fontSize: 15,
              }}
            >
              Product Detail
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
