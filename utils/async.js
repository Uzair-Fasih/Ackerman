import { NativeModules } from "react-native";

const async = async (pending) => {
  try {
    const res = await pending();
    return Promise.resolve([null, res]);
  } catch (err) {
    return Promise.resolve([err, null]);
  }
};

export default async;
