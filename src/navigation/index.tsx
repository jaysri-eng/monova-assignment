import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import DummyScreen from "../screens/DummyScreen";
import SavedScreen from "../screens/SavedScreen";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

const BottomTab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Bookmark"
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: "#E86F39",
          tabBarInactiveTintColor: "#9A958F",
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: "transparent" },
        }}
      >
        <BottomTab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }} 
        />
        <BottomTab.Screen 
          name="Dummy" 
          component={DummyScreen} 
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="apps-outline" size={size} color={color} />
          ),
        }}
        />
        <BottomTab.Screen 
          name="Bookmark" 
          component={SavedScreen} 
          options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
