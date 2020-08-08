import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Entry({ item, rank, isLast, navigation }) {
  return (
    <TouchableHighlight
      style={[styles.Container, { maxWidth: !isLast ? width : width * 0.75 }]}
      activeOpacity={1}
      underlayColor="rgba(0, 0, 0, .1)"
      onPress={() => {
        navigation.navigate("Show", {
          id: item.id,
        });
      }}
    >
      <View style={[styles.Entry, { width: !isLast ? width : width * 0.75 }]}>
        <Text style={styles.ranking}>{rank}</Text>
        <ImageBackground
          style={styles.thumbnail}
          imageStyle={styles.background}
          source={{
            uri: item.thumbnail,
          }}
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>
            {item.title.length > 35
              ? item.title.substring(0, 32) + "..."
              : item.title}
          </Text>
          <Text style={styles.genre}>{item.genre}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = {
  Container: {
    zIndex: 2,
    overflow: "hidden",
  },
  Entry: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  ranking: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
    marginLeft: 10,
    marginTop: -10,
    marginRight: 20,
  },
  thumbnail: {
    width: 40,
    height: 40,
    marginBottom: 10,
    marginRight: 20,
  },
  background: {
    resizeMode: "cover",
    borderRadius: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  genre: {
    fontSize: 14,
    color: "#AAA",
  },
};
