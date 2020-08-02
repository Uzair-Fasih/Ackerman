import "react-native-gesture-handler";
import React from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areFontsLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      light: require("./assets/fonts/light.ttf"),
      bold: require("./assets/fonts/bold.ttf"),
    });
    this.setState({ areFontsLoaded: true });
  }

  render() {
    if (this.state.areFontsLoaded)
      return (
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      );
    else return null;
  }
}
