import React from "react";
import { View, Text, ImageBackground, TouchableHighlight } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Tile = ({ item, width }) => {
  return (
    <TouchableHighlight
      style={[styles.Container, { width: width ? width - 10 : 105 }]}
      activeOpacity={1}
      underlayColor="rgba(0, 0, 0, .1)"
      onPress={() => {}}
    >
      <View style={[styles.Tile, { width: width ? width - 20 : 95 }]}>
        <ImageBackground
          style={styles.image}
          imageStyle={[
            styles.background,
            { width: width ? width - 20 : 95, height: width ? width - 20 : 95 },
          ]}
          source={{
            uri: item.thumb,
          }}
        />
        <Text style={[styles.genre, { marginTop: width ? 20 : 0 }]}>
          {item.genre}
        </Text>

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

        {item.studio ? (
          <Text style={styles.studio}>{item.studio}</Text>
        ) : (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Entypo name="heart" size={17} color="#00dc64" />
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Tile;

const styles = {
  Container: {
    width: 105,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  Tile: {
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
