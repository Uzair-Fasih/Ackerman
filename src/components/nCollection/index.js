import React from "react";
import { View, Text, FlatList } from "react-native";
import SmallCard from "../nTile/nSmallTile";

const styles = {
  Collection: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 30,
  },
  collectionTitle: {
    fontSize: 22,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 15,
  },
};

const Collection = (props) => {
  return (
    <View style={styles.Collection}>
      <Text style={styles.collectionTitle}>{props.title}</Text>
      <FlatList
        horizontal
        data={props.lists}
        renderItem={(cProps) => (
          <SmallCard {...cProps} lastIndex={props.lists.length - 1} />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default Collection;
