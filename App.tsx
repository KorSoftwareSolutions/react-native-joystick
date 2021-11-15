import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AxisPad from "./src/AxisPad";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AxisPad onMove={(e) => console.log(e)} radius={50} />
    </View>
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
