import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, Dimensions } from "react-native";
import * as Network from "expo-network";

import StackNavigator from "./StackNavigator";
// import StackNavigator from "../../src/screens/nShow";

import NotConnected from "../screens/nErrors/NotConnected";
import { Provider } from "react-redux";
import store from "../../store";

const { width, height } = Dimensions.get("window");
export default function Main() {
  const [isInternetReachable, changeInternetAvailiablity] = useState(true);
  const internetStatus = Network.getNetworkStateAsync();

  internetStatus.then((res) => {
    if (isInternetReachable != res.isInternetReachable) {
      changeInternetAvailiablity(res.isInternetReachable);
    }
  });

  return (
    <SafeAreaView
      style={{ display: "flex", width, height, backgroundColor: "#FFF" }}
    >
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, .35)" />
      {isInternetReachable ? (
        <Provider store={store}>
          <StackNavigator />
        </Provider>
      ) : (
        <NotConnected />
      )}
    </SafeAreaView>
  );
}
