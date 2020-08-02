import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StatusBar,
  StyleSheet,
} from "react-native";
import TopTabNavigation from "../../navigation/topTabNavigator";
const { width, height } = Dimensions.get("window");
const styles = {
  Airing: {
    width,
    height,
    paddingTop: StatusBar.currentHeight,
  },
  titlebar: {
    padding: 15,
    marginHorizontal: 5,
    paddingVertical: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
  },
  title: {
    fontSize: 22.5,
    fontWeight: "bold",
  },
};

const Airing = () => {
  return (
    <SafeAreaView style={styles.Airing}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, .35)" />
      <View style={styles.titlebar}>
        <Text style={styles.title}>Seasonal Anime</Text>
      </View>
      <TopTabNavigation />
    </SafeAreaView>
  );
};

export default Airing;
