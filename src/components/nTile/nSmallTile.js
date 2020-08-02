import React from "react";
import { View, Text, ImageBackground, TouchableHighlight } from "react-native";

const SmallCard = ({ item, index, lastIndex }) => {
  return (
    <TouchableHighlight
      style={[
        styles.Container,
        {
          marginLeft: index == 0 ? 10 : 0,
          marginRight: index == lastIndex ? 10 : 0,
        },
      ]}
      activeOpacity={1}
      underlayColor="rgba(0, 0, 0, .1)"
      onPress={() => {}}
    >
      <View style={styles.SmallCard}>
        <ImageBackground
          style={styles.image}
          imageStyle={styles.background}
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

        <Text style={styles.studio}>{item.studio}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default SmallCard;

const styles = {
  Container: {
    width: 105,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  SmallCard: {
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
    width: 95,
    height: 95,
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
};
