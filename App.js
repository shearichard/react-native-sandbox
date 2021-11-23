import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [name, setName] = useState('Richard Shea');
  const [age, setAge] = useState('21');
  const [people, setPeople] = useState([
      {name: 'Fred', key: 1},
      {name: 'Mary', key: 2},
      {name: 'Paul', key: 3},
      {name: 'Kate', key: 4},
      {name: 'Stan', key: 5},
      {name: 'Alice', key: 6},
      {name: 'Tom', key: 7},
      {name: 'Hugo', key: 8},
      {name: 'Charlie', key: 9},
  ]);

  return (
    <View style={styles.container}>
        <ScrollView>
            {people.map(item => (
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: 'pink',
      fontSize: 24
  }
});
