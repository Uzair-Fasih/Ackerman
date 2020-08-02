import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const styles = {
  Footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbb",
    paddingVertical: 40,
    paddingHorizontal: 30,
    marginTop: 30,
    display: "flex",
  },
  Image: {
    flex: 2,
  },
  AppName: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  Description: {
    fontSize: 14,
    color: "#555",
    width: width * 0.5,
  },
  social: {
    padding: 10,
    borderRadius: 50,
  },
};

const Footer = (props) => {
  return (
    <View style={styles.Footer}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ display: "flex", flex: 2.5 }}>
          <Text style={styles.AppName}>Ackerman</Text>
          <Text style={styles.Description}>
            Ackerman uses API from AniList.co, MyAnimeList and HorribleSubs.
            This app doesn't host any of the content presented.
          </Text>
        </View>
        <ImageBackground
          style={styles.Image}
          source={require("../../../static/Logo-stencil.png")}
          imageStyle={{ resizeMode: "contain" }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <TouchableHighlight
          style={styles.social}
          onPress={() => {}}
          activeOpacity={1}
          underlayColor={"#00dc64"}
        >
          <Feather name="github" size={24} color="black" />
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.social}
          onPress={() => {}}
          activeOpacity={1}
          underlayColor={"#00dc64"}
        >
          <Feather name="link-2" size={24} color="black" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Footer;
