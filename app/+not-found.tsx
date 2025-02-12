import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          GO TO HOME SCREEN.
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  text: {
    color: "#FFF",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#FFF",
  }
});