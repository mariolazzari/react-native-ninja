import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  const { container, header, boldText, body } = styles;

  return (
    <View style={container}>
      <View style={header}>
        <Text style={boldText}>Ciao!</Text>
      </View>
      <View style={body}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus blanditiis libero, consequatur beatae neque, ex a nihil
          atque cum explicabo veniam rem, aliquid quasi. Accusantium iste
          excepturi in dolorum eligendi!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "pink",
    padding: 20
  },
  boldText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: "yellow",
    padding: 20
  }
});

export default App;
