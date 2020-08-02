import React from "react";
import { View, Text, Dimensions } from "react-native";
import Card from "../nTile/nCard";

const { width, height } = Dimensions.get("window");

const styles = {
  Category: {
    display: "flex",
    flexDirection: "column",
    width,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  Row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  collectionTitle: {
    fontSize: 22,
    color: "#00dc64",
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 20,
  },
};

const Category = (props) => {
  return (
    <View style={styles.Category}>
      <Text style={styles.collectionTitle}>{props.title}</Text>
      <View style={styles.Row}>
        {props.lists.slice(0, 3).map((x, itemIndex) => (
          <Card
            item={x}
            key={itemIndex}
            width={width / 3}
            navigation={props.navigation}
          />
        ))}
      </View>
      <View style={styles.Row}>
        {props.lists.slice(3, 6).map((x, itemIndex) => (
          <Card item={x} key={itemIndex} width={width / 3} />
        ))}
      </View>
    </View>
  );
};

export default Category;
