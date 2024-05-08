import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

function App() {
  const [clocks, setClocks] = useState([]);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const refreshTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  const addClock = () => {
    setClocks([...clocks, new Date().toLocaleTimeString()]);
  };

  // 定义 ClockList 组件用于展示时钟列表
  function ClockList({ clocks }) {
    return (
      <ScrollView style={styles.clockList}>
        {clocks.map((clock, index) => (
          <View style={styles.clockItem} key={index}>
            <Text>
              Clock {index + 1}: {clock}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Full Name: Yancy</Text>
      <View style={styles.timeDisplay}>
        <Text style={styles.text}>Current Time: {time}</Text>
        <TouchableOpacity style={styles.refreshButton} onPress={refreshTime}>
          <Text style={styles.buttonText}>Refresh Time</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addClock}>
        <Text style={styles.buttonText}>+ Add Clock</Text>
      </TouchableOpacity>
      <ClockList clocks={clocks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e0f7fa",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00796b",
  },
  timeDisplay: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 18,
    color: "#004d40",
  },
  refreshButton: {
    backgroundColor: "#26a69a",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#26a69a",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  clockList: {
    paddingTop: 10,
    maxHeight: 400,
    overflow: "scroll",
  },
  clockItem: {
    backgroundColor: "#b2dfdb",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default App;
