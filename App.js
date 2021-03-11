import "react-native-gesture-handler";
import React from "react";
import setup from "./utils/setup";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/navigation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSetupCompleted: false,
    };
  }

  async componentDidMount() {
    const isSetupCompleted = await setup();
    this.setState({ isSetupCompleted });
  }

  render() {
    if (this.state.isSetupCompleted)
      return (
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      );
    else return null;
  }
}
