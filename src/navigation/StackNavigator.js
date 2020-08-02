import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./bottomTabNavigator";
import Show from "../screens/nShow";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="BaseNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Show" component={Show} />
    </Stack.Navigator>
  );
}
