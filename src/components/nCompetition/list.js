import React from "react";
import { View, Text, Dimensions } from "react-native";
import Entry from "./entry";
const { width } = Dimensions.get("window");

const List = (props) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        width: props.isLast ? width : width * 0.75,
      }}
    >
      {props.list.map((x, index) => (
        <Entry
          item={x}
          key={props.listIndex + index}
          rank={index + 1}
          isLast={props.isLast}
        />
      ))}
    </View>
  );
};

export default List;
