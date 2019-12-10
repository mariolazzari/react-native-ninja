import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// component
const App = () => {
  // component state
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(44);
  // component styles
  const { container, header, boldText, body } = styles;

  return (
    <View style={container}>
      <View style={header}>
        <Text style={boldText}>My name is {name}</Text>
      </View>
      <View style={body}>
        <Button title="ok" />
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
