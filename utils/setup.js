/**
 * This file contains logic for setting up the application.
 */
import * as Font from "expo-font";
import * as Network from "expo-network";
import { ENV } from "@env";

export default async function () {
  try {
    console.log("Running the application in", ENV);

    // Load fonts for the apppliacation
    await Font.loadAsync({
      light: require("../assets/fonts/light.ttf"),
      bold: require("../assets/fonts/bold.ttf"),
    });

    // Check if device is connected to the internet
    const isInternetReachable = await Network.getNetworkStateAsync();
    if (!isInternetReachable) throw new Error("Not connected to the internet");

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
