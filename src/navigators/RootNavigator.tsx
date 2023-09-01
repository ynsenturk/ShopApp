import React from "react";
import { Text, View, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../theme";
import CartScreen from "../screens/CartScreen";
import FavoriteProductsScreen from "../screens/FavoriteProductsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  HomeOutline,
  BasketOutline,
  StarOutline,
  PersonOutline,
} from "../../assets/icons";
import HomeNavigator from "./HomeNavigator";
import { useAppSelector } from "../redux/hooks";
import { IStore } from "../redux/store/store";

const { width, height } = Dimensions.get("window");
const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  const cart = useAppSelector((state: IStore) => state.shopUser.cart);
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.main,
        tabBarInactiveTintColor: Colors.black,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          shadowColor: Colors.grey,
          shadowOpacity: 2,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors.main,
            height: height * 0.11,
          },
          tabBarIcon: ({ color }) => (
            <HomeOutline
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={() => <CartScreen cartItems={cart} route={"CartScreen"} />}
        options={{
          headerStyle: { backgroundColor: Colors.main, height: height * 0.11 },
          tabBarIcon: ({ color }) => (
            <View>
              <BasketOutline
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={color}
              />
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  backgroundColor: "#F24E61",
                  position: "absolute",
                  top: 0,
                  right: -5,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: Colors.white,
                  }}
                >
                  {cart.length}
                </Text>
              </View>
            </View>
          ),
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
      <Tab.Screen
        name="FavoriteProducts"
        component={FavoriteProductsScreen}
        options={{
          headerStyle: { backgroundColor: Colors.main, height: height * 0.11 },
          tabBarIcon: ({ color }) => (
            <StarOutline
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={color}
            />
          ),
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
              Favorites
            </Text>
          ),
          headerTitle: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: { backgroundColor: Colors.main, height: height * 0.11 },
          tabBarIcon: ({ color }) => (
            <PersonOutline
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={color}
            />
          ),
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
              Profile
            </Text>
          ),
          headerTitle: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
