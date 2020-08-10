import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [size, setsize] = useState(25);

  const sum = () => setCount(count + 1);
  const sub = () => setCount(count - 1);
  const reset = () => setCount(count - count);
  const bigger = () => setsize(size + 1);
  const smaller = () => setsize(size - 1);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: size, fontWeight: "bold" }}> You clicked {count} times</Text>

      <TouchableOpacity style={styles.button} onPress={sum}>
        <Text>Click to add one</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={sub}>
        <Text>Click to subtract one</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text>Click here to reset the counter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={bigger}>
        <Text>Increase the font size</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={smaller}>
        <Text>Decrease font size</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0FFFF",
  },
    button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 250,
    height: 50,
    borderColor: "#001",
    borderWidth: 4,
    marginTop: 16,
  },
});
