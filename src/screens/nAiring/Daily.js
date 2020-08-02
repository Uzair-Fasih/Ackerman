import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import Tile from "../../components/nTile";

const { width, height } = Dimensions.get("window");

const lists = [
  {
    id: 1,
    thumb:
      "https://s4.anilist.co/file/anilistcdn/character/large/b128106-1Gf64rjTWY8w.png",
    title: "Kanojo, Okarishimasu",
    genre: "Romance",
    score: "10",
  },
  {
    id: 2,
    thumb:
      "https://s4.anilist.co/file/anilistcdn/character/large/b124136-CgcQbeqQFocf.jpg",
    title: "The God Of High School",
    genre: "Action",
    score: "10",
  },
  {
    id: 3,
    thumb:
      "https://s4.anilist.co/file/anilistcdn/character/large/b40881-F3gr1PkreDvj.png",
    title: "Attack On Titan ",
    genre: "Action",
    score: "10",
  },
  {
    id: 4,
    thumb:
      "https://s4.anilist.co/file/anilistcdn/character/large/b128106-1Gf64rjTWY8w.png",
    title: "Kanojo, Okarishimasu Okarishimasu Okarishimasu",
    genre: "Romance",
    score: "10",
  },
  {
    id: 5,
    thumb:
      "https://s4.anilist.co/file/anilistcdn/character/large/b124136-CgcQbeqQFocf.jpg",
    title: "The God Of High School",
    genre: "Action",
    score: "10",
  },
  {
    id: 6,
    thumb:
      "https://s4.anilist.co/file/anilistcdn/character/large/b40881-F3gr1PkreDvj.png",
    title: "Attack On Titan ",
    genre: "Action",
    score: "10",
  },
];

const styles = {
  Daily: {
    width,
    paddingHorizontal: 10,
  },
  Content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

const Daily = (props) => {
  return (
    <ScrollView style={styles.Daily}>
      <View style={styles.Content}>
        {lists.map((x, itemIndex) => (
          <Tile item={x} key={itemIndex} width={width / 3} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Daily;
