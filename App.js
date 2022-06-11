import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  Alert,
  TouchableHighlight,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "blue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      >
        <Button
          color="orange"
          title="Click me"
          onPress={() => console.log("hola")}
        />
      </View>
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
