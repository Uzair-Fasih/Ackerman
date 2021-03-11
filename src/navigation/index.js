import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, Dimensions } from "react-native";

import StackNavigator from "./StackNavigator";
// import StackNavigator from "../../src/screens/nShow";

import { Provider } from "react-redux";
import store from "../../store";

const { width, height } = Dimensions.get("window");
export default function Main() {
  return (
    <SafeAreaView
      style={{ display: "flex", width, height, backgroundColor: "#FFF" }}
    >
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, .35)" />
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </SafeAreaView>
  );
}
