import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import LogoBox from "./shared/LogoBox";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <LogoBox />

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: red,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: teal,
  },
});

export default WelcomeScreen;
