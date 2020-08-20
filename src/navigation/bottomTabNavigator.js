import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Showcase from "../screens/nShowcase";
import Airing from "../screens/nAiring";
import Search from "../screens/nSearch";

const Tab = createBottomTabNavigator();

function TabIcon(focused, color, size, route) {
  let iconName;
  if (route.name === "Showcase") {
    return (
      <AntDesign
        name="dingding"
        size={24}
        color={focused ? "#00dc64" : "#333"}
      />
    );
  } else if (route.name === "Airing") {
    return (
      <AntDesign
        name="calendar"
        size={24}
        color={focused ? "#00dc64" : "#333"}
      />
    );
  } else if (route.name === "Discover") {
    return (
      <AntDesign
        name="search1"
        size={24}
        color={focused ? "#00dc64" : "#333"}
      />
    );
  }
  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
}

export default function bottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) =>
          TabIcon(focused, "#3db4f2", size, route),
      })}
      tabBarOptions={{
        showLabel: true,
        style: {
          height: 65,
        },
        activeTintColor: "#00dc64",
        inactiveTintColor: "#333",
        tabStyle: {
          backgroundColor: "#fafafa",
        },
        labelStyle: {
          fontSize: 11,
          marginBottom: 10,
          textTransform: "uppercase",
          letterSpacing: 1,
        },
      }}
    >
      <Tab.Screen name="Showcase" component={Showcase} />
      <Tab.Screen name="Airing" component={Airing} />
      <Tab.Screen name="Discover" component={Search} />
    </Tab.Navigator>
  );
}

// const tabBaropts = {
//   showIcon: true,
//   style: {
//     backgroundColor: "#222327",
//     height: 65,
//   },
//   labelStyle: {
//     fontSize: 10,
//   },
//   activeTintColor: "#B81351",
//   inactiveTintColor: "#707070",
//   indicatorStyle: {
//     backgroundColor: "#222327",
//   },
// };
