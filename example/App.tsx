import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ReactNativeJoystick } from "@korsolutions/react-native-joystick";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ReactNativeJoystick radius={50} onMove={console.log} />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
