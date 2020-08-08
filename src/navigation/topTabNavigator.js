import React, { useRef } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const styles = {
  TabBar: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#AAA",
    maxHeight: 40,
    display: "flex",
    flexDirection: "row",
  },
  tabStyle: {
    alignItems: "center",
  },
  tab: {
    height: 40,
    marginHorizontal: 5.5,
    paddingHorizontal: 5.5,
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    color: "#AAA",
  },
};

function MyTabBar({ state, descriptors, navigation, position }) {
  const scrollViewRef = useRef();
  return (
    <ScrollView
      horizontal
      ref={scrollViewRef}
      style={styles.TabBar}
      contentContainerStyle={styles.tabStyle}
      showsHorizontalScrollIndicator={false}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tab,
              { borderBottomColor: isFocused ? "#000" : "transparent" },
            ]}
            key={index}
          >
            <Animated.Text
              style={[
                styles.text,
                {
                  color: isFocused ? "#212121" : "#AAA",
                  fontWeight: isFocused ? "bold" : "normal",
                },
              ]}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

function getToday() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const d = new Date().getDay();
  return days[d];
}

import Daily from "../screens/nAiring/Daily";
const Tab = createMaterialTopTabNavigator();

export default function topTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={getToday()}
      lazy={true}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="MON" component={Daily} />
      <Tab.Screen name="TUE" component={Daily} />
      <Tab.Screen name="WED" component={Daily} />
      <Tab.Screen name="THU" component={Daily} />
      <Tab.Screen name="FRI" component={Daily} />
      <Tab.Screen name="SAT" component={Daily} />
      <Tab.Screen name="SUN" component={Daily} />
    </Tab.Navigator>
  );
}

// <Tab.Screen name="COMPLETED" component={Daily} />
