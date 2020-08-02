import React from "react";
import { View, Text, ImageBackground, TouchableHighlight } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Card = ({ item, width, navigation }) => {
  return (
    <TouchableHighlight
      style={[styles.Container, { width: width - 10 }]}
      activeOpacity={1}
      underlayColor="rgba(0, 0, 0, .1)"
      onPress={() => {
        navigation.navigate("Show", {
          id: 86,
        });
      }}
    >
      <View style={[styles.Card, { width: width - 20 }]}>
        <ImageBackground
          style={styles.image}
          imageStyle={[
            styles.background,
            { width: width - 20, height: width - 20 },
          ]}
          source={{
            uri: item.thumb,
          }}
        />
        <Text style={styles.genre}>{item.genre}</Text>

        <View
          style={{
            flexGrow: 1,
          }}
        >
          <Text style={styles.title}>
            {item.title.length >= 30
              ? item.title.substring(0, 27) + "..."
              : item.title}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo name="heart" size={17} color="#00dc64" />
          <Text style={styles.score}>{item.score}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;

const styles = {
  Container: {
    width: 105,
    padding: 5,
    borderRadius: 5,
  },
  Card: {
    display: "flex",
    width: 95,
    flexGrow: 1,
  },
  image: {
    width: 95,
    height: 95,
    marginBottom: 10,
  },
  background: {
    resizeMode: "cover",
    borderRadius: 5,
  },
  genre: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#555",
  },
  studio: {
    fontSize: 13,
    color: "#AAA",
  },
  score: {
    fontSize: 17,
    marginLeft: 5,
    color: "#00dc64",
  },
};
