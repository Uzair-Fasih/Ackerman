import React from "react";
import { View, Text } from "react-native";

export default class Show extends React.Component {
  render() {
    return (
      <View>
        <Text>Show {this.props.route.params.id}</Text>
      </View>
    );
  }
}
