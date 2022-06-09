import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  Alert,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const alert = () => {
    Alert.alert("Color", "what is your favorite color?", [
      { text: "blue", onPress: () => console.log("blue") },
      { text: "orange", onPress: () => console.log("orange") },
    ]);
  };

  const alertWithPrompt = () => {
    Alert.prompt("Color", "what is your favorite color?", (text) =>
      console.log(text)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click me" onPress={alert} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
