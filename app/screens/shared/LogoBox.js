import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function LogoBox(props) {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <Text>Sell What You Don't Need</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default LogoBox;
