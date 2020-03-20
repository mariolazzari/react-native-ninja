import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";

// component
const App = () => {
  // component state
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState("44");
  const [people, setPeople] = useState([
    { id: 1, name: "Mario" }
    //{ id: 2, name: "Mariarosa" },
    //{ id: 3, name: "Maria" }
  ]);

  return (
    <View style={styles.container}>
      <Button title="OK" onPress={() => alert("ciao")} />

      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Mario Rossi"
        onChangeText={name => setName(name)}
      />

      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        placeholder="99"
        keyboardType="numeric"
        onChangeText={age => setAge(age)}
      />

      <Text>
        My name is {name} and I'm {age}.
      </Text>

      <ScrollView>
        {people.map(item => (
          <View style={styles.item} key={item.id}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //alignItems: "center",
    //justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    backgroundColor: "pink",
    padding: 30,
    fontSize: 24
  }
});

export default App;
