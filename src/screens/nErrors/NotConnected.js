import React from "react";
import { View, Text, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = {
  NotConnected: {
    width,
    height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  ErrorTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ErrorDescription: {
    fontSize: 14,
  },
};

export default function NotConnected() {
  return (
    <View style={styles.NotConnected}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../../../static/errors/not_connected.png")}
      />
      <Text style={styles.ErrorTitle}>Internet Not Found</Text>
      <Text style={styles.ErrorDescription}>
        You are not connected to the internet. Please check your internet
        connection and try again.
      </Text>
    </View>
  );
}
