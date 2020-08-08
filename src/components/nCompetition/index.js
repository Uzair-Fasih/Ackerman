import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import List from "./list";

const { width } = Dimensions.get("window");

const styles = {
  scrollViewStyle: {
    display: "flex",
    flexDirectoin: "row",
  },
  CompetitionTitle: {
    fontSize: 22,
    color: "#222",
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft: 15,
  },
};

const Competition = (props) => {
  const [currentTitle, changeTitle] = useState(
    props.lists.length > 0 ? props.lists[0].title : "🤷"
  );

  return (
    <View>
      <Text style={styles.CompetitionTitle}>{currentTitle}</Text>
      <ScrollView
        horizontal
        style={styles.scrollViewStyle}
        pagingEnabled
        snapToOffsets={props.lists.map((x, index) => width * 0.75 * index)}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const index = Math.floor(offsetX / (width * 0.75));
          if (index >= 0 && currentTitle != props.lists[index].title) {
            changeTitle(props.lists[index].title);
          }
        }}
      >
        {props.lists.map((x, index) => (
          <List
            navigation={props.navigation}
            list={x.list}
            listIndex={index + 1}
            isLast={props.lists.length - 1 == index}
            key={String(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Competition;
